package com.springboot.ses.repository;

import com.springboot.ses.pojo.SmartMeter;
import com.springboot.ses.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import java.util.List;

@Repository
public class UserRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User findById(String username) {
        User user = mongoTemplate.findOne(Query.query(Criteria.where("username").is(username)), User.class);
        return user;
    }

    public String signUp(User newUser) {
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));;
        mongoTemplate.save(newUser);

        return "User Created!!";
    }
}
