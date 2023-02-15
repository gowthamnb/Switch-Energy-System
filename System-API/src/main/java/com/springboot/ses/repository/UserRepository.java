package com.springboot.ses.repository;

import com.springboot.ses.pojo.SmartMeter;
import com.springboot.ses.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    public String signUp(User newUser) {
        mongoTemplate.save(newUser);

        return "User Created!!";
    }
}
