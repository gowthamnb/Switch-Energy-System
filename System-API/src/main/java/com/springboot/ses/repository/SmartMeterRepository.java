package com.springboot.ses.repository;

import com.springboot.ses.pojo.Reading;
import com.springboot.ses.pojo.Readings;
import com.springboot.ses.pojo.SmartMeter;
import com.springboot.ses.service.SmartMeterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SmartMeterRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private SmartMeterService smartMeterService;

    public List<SmartMeter> getAllSmartMeters() {
        return mongoTemplate.findAll(SmartMeter.class);
    }

    public String enroll(SmartMeter smartMeter) {
        mongoTemplate.save(smartMeter);
        Readings readings = new Readings(smartMeter.getId());
        mongoTemplate.save(readings);
        return "Smart Meter Requested!!";
    }

    public List<SmartMeter> getSmartMeters(String id) {
        return mongoTemplate.find(Query.query(Criteria.where("userId").is(id)), SmartMeter.class);

    }

    public List<SmartMeter> requestedSmartMeters() {
        return mongoTemplate.find(Query.query(Criteria.where("status").is("Pending")), SmartMeter.class);
    }

    public String approveSmartMeter(String id) {
        Query query1 = new Query().addCriteria(Criteria.where("id").is(id));
        Update update = new Update();
        SmartMeter updateSmartMeter = mongoTemplate.findOne(Query.query(Criteria.where("id").is(id)), SmartMeter.class);
        update.set("status", "Approved");

        mongoTemplate.findAndModify(query1, update, SmartMeter.class);

        return "Smart Meter Approved!!";
    }

    public String rejectSmartMeter(String id) {
        Query query1 = new Query().addCriteria(Criteria.where("id").is(id));
        Update update = new Update();
        SmartMeter updateSmartMeter = mongoTemplate.findOne(Query.query(Criteria.where("id").is(id)), SmartMeter.class);
        update.set("status", "Rejected");

        mongoTemplate.findAndModify(query1, update, SmartMeter.class);

        return "Smart Meter Rejected!!";
    }

    public String switchSmartMeter(String id, String provider) {
        Query query1 = new Query().addCriteria(Criteria.where("id").is(id));
        Update update = new Update();
        SmartMeter updateSmartMeter = mongoTemplate.findOne(Query.query(Criteria.where("id").is(id)), SmartMeter.class);
        if(provider != null) {
            update.set("providerName", provider);
        }

        mongoTemplate.findAndModify(query1, update, SmartMeter.class);

        return "Provider Switched!!";
    }

    public void generateReadings() {
        Reading reading = new Reading(5);

        mongoTemplate.updateMulti(new Query().addCriteria(Criteria.where("isEnabled").is(true)),
                new Update().push("generatedReadings", reading), Readings.class);
    }

    public String generateBill(String id) {
        Readings readings = mongoTemplate.findOne(Query.query(Criteria.where("userId").is(id)), Readings.class);
        readings.getGeneratedReadings().size();

        return "Bill Generated!!";
    }
}
