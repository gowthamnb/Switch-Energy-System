package com.springboot.ses.controller;

import com.springboot.ses.pojo.Provider;

import com.springboot.ses.service.SmartMeterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("smart-meter")
public class SmartMeterController {

    @Autowired
    private SmartMeterService smartMeterService;
    @PostMapping("/enroll")
    public String enrollSmartMeter(@RequestBody Provider provider) {
        return smartMeterService.enroll(provider);
    }

    @PutMapping("/switch-provider")
    public String switchSmartMeter (@RequestBody Provider provider) {

        return smartMeterService.enroll(provider);
    }
}
