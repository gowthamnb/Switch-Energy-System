package com.springboot.ses.repository;

import com.springboot.ses.SesApplication;
import com.springboot.ses.dto.ReadingResponse;
import com.springboot.ses.pojo.Readings;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CalculateBillAmountRepository {
    private static final Logger logger = LoggerFactory.getLogger(SesApplication.class);

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<ReadingResponse> calculateBillAmount() {
        UnwindOperation unwindOperation = Aggregation.unwind("generatedReadings");
        MatchOperation matchOperation = Aggregation.match(Criteria.where("isEnabled").is(true));
        GroupOperation groupOperation = Aggregation.group("_id").sum("generatedReadings.reading").as("totalReadings");

        Aggregation aggregation = Aggregation.newAggregation(unwindOperation, matchOperation, groupOperation);
        AggregationResults<ReadingResponse> totalReadings = mongoTemplate.aggregate(aggregation, Readings.class, ReadingResponse.class);

        logger.info(totalReadings.getMappedResults().toString());
        return totalReadings.getMappedResults();
    }
}
