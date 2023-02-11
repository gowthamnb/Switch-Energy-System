package com.springboot.ses.controller;

import com.springboot.ses.pojo.Provider;
import com.springboot.ses.pojo.User;

import com.springboot.ses.service.SmartMeterService;
import com.springboot.ses.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping("/signup")
    public String signUp(@RequestBody User newUser) {
        return userService.signUp(newUser);
    }

}
