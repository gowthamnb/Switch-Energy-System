package com.springboot.ses.repository;

import com.springboot.ses.pojo.Provider;
import com.springboot.ses.pojo.SmartMeter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

@Repository
public class SmartMeterRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    public String enroll(SmartMeter smartMeter) {
        mongoTemplate.save(smartMeter);
        return "Smart Meter Requested!!";
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

    public String switchSmartMeter(String id, Provider provider) {
        Query query1 = new Query().addCriteria(Criteria.where("id").is(id));
        Update update = new Update();
        SmartMeter updateSmartMeter = mongoTemplate.findOne(Query.query(Criteria.where("id").is(id)), SmartMeter.class);
        if(provider.getName() != null) {
            update.set("providerName", provider.getName());
        }

        mongoTemplate.findAndModify(query1, update, SmartMeter.class);
        return "Provider Switched!!";
    }
}
