package com.springboot.ses.repository;

import com.springboot.ses.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    public String signUp(User newUser) {
        mongoTemplate.save(newUser);
        return "User Created!!";
    }
}
