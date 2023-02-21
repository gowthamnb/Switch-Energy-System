package com.springboot.ses.repository;

import com.springboot.ses.SesApplication;
import com.springboot.ses.controller.ProviderController;
import com.springboot.ses.dto.ReadingResponse;
import com.springboot.ses.pojo.CalculateBillAmount;
import com.springboot.ses.pojo.Readings;
import com.springboot.ses.pojo.SmartMeter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CalculateBillAmountRepository {
    private static final Logger logger = LoggerFactory.getLogger(SesApplication.class);

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private ProviderController providerController;

    public List<ReadingResponse> calculateBillAmount() {
        UnwindOperation unwindOperation = Aggregation.unwind("generatedReadings");
        MatchOperation matchOperation = Aggregation.match(Criteria.where("isEnabled").is(true));
        GroupOperation groupOperation = Aggregation.group("smartMeterId").sum("generatedReadings.reading").as("totalReadings");

        Aggregation aggregation = Aggregation.newAggregation(unwindOperation, matchOperation, groupOperation);
        AggregationResults<ReadingResponse> totalReadings = mongoTemplate.aggregate(aggregation, Readings.class, ReadingResponse.class);

        logger.info(totalReadings.getMappedResults().toString());
        return totalReadings.getMappedResults();
    }

    public double calculateBills(String id) {

        SmartMeter smartMeter = mongoTemplate.findOne(Query.query(Criteria.where("id").is(id)), SmartMeter.class);

        double totalReadings = calculateBillAmount().stream()
                .filter(smartMeters-> smartMeters.getId().equals(id))
                .toList().get(0).getTotalReadings();

        double totalAmount = totalReadings * providerController.getProviderRateByName(smartMeter.getProviderName());

//        CalculateBillAmount calculateBillAmount = new CalculateBillAmount(id);
//        calculateBillAmount.setReading(totalReadings);
//        calculateBillAmount.setBillAmount(totalAmount);
//        mongoTemplate.save(calculateBillAmount);

        return totalAmount;

    }
}
