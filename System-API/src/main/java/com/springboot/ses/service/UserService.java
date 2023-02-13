package com.springboot.ses.service;

import com.springboot.ses.pojo.SmartMeter;
import com.springboot.ses.pojo.User;
import com.springboot.ses.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    public String role = "ROLE_USER";

    @Autowired
    private UserRepository userRepository;

    public String signUp(User newUser) {
        newUser.setId(generateId(newUser));
        newUser.setRole(role);
        return userRepository.signUp(newUser);
    }

    private String generateId(User newUser) {
        String newUserName = newUser.getName();
        long newUserContact = (long) newUser.getContactNumber();
        String userId = "";
        if(newUserName.length() > 3) {
            userId = newUserName.substring(0, 3) + "@user";
        }
        else {
            userId = newUserName + "@user";
        }
        return userId;
    }

    public List<SmartMeter> getSmartMeters(String id) {
        return userRepository.getSmartMeters(id);
    }

    public List<SmartMeter> requestedSmartMeters() {
        return userRepository.requestedSmartMeters();
    }
}
