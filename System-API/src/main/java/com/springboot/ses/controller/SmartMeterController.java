package com.springboot.ses.controller;

import com.springboot.ses.pojo.Provider;
import com.springboot.ses.repository.SmartMeterRepository;

import com.springboot.ses.service.SmartMeterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("smart-meter")
public class SmartMeterController {

    @Autowired
    private SmartMeterService smartMeterService;
    @PostMapping("/enroll")
    public String enrollSmartMeter(@RequestBody Provider provider) {
        return smartMeterService.enroll(provider);
    }
}
