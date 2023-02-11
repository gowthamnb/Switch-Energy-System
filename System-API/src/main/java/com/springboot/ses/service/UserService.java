package com.springboot.ses.service;

import com.springboot.ses.pojo.User;
import com.springboot.ses.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
            userId = newUserName.substring(0, 3) + "@" +  String.valueOf(newUserContact).substring(0, 5);
        }
        else {
            userId = newUserName;
        }
        return userId;
    }
}
