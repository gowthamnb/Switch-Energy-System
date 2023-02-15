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
        newUser.setId(generateId(newUser));
        newUser.setRole(role);
        return userRepository.signUp(newUser);
    }

    private String generateId(User newUser) {
        String newUserName = newUser.getName();
        long toLong = 1L;
        long newUserContact = (long) newUser.getContactNumber() * toLong;
        String userId = "";
        if(newUserName.length() > 3 && String.valueOf(newUserContact).length() == 10) {
            userId = newUserName.substring(0, 3) + "@" + String.valueOf(newUserContact).substring(0,3);
        }
        else {
            userId = newUserName + "@" + String.valueOf(newUserContact).substring(0,3);
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
