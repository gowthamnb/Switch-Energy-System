package com.springboot.ses.controller;

import com.springboot.ses.pojo.SmartMeter;
import com.springboot.ses.pojo.User;
import com.springboot.ses.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signUp(@RequestBody User newUser) {
        System.out.println(newUser);
        return userService.signUp(newUser);
    }

    @GetMapping("/{id}/display")
    public List<SmartMeter> getSmartMeters(@PathVariable("id") String id) {
        return userService.getSmartMeters(id);
    }

    @GetMapping("/requests")
    public List<SmartMeter> requestedSmartMeters() {
        return userService.requestedSmartMeters();
    }

}
