package com.springboot.ses.controller;

import com.springboot.ses.pojo.User;
import com.springboot.ses.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signUp(@RequestBody User newUser) {
        return userService.signUp(newUser);
    }

    @GetMapping("/welcome")
    public String welcomeMessage() {
        return "Welcome !!";
    }
}
