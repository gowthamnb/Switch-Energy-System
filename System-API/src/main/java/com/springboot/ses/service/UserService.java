package com.springboot.ses.service;

import com.springboot.ses.pojo.SmartMeter;
import com.springboot.ses.pojo.User;
import com.springboot.ses.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String role = "ROLE_USER";

    public String signUp(User newUser) {
        newUser.setRole(role);
        return userRepository.signUp(newUser);
    }

}
