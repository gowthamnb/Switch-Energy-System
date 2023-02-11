package com.springboot.ses.repository;

import com.springboot.ses.pojo.Provider;
import com.springboot.ses.pojo.SmartMeter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

public class SmartMeterRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    public String enroll(SmartMeter smartMeter) {
        mongoTemplate.save(smartMeter);
        return "Smart Meter Requested!!";
    }
}
