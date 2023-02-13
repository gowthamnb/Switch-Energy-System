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
    @PostMapping("/{id}/enroll")
    public String enrollSmartMeter(@PathVariable String id, @RequestBody Provider provider) {

        return smartMeterService.enroll(id, provider);
    }

    //approve Smart Meter
    @PutMapping("/{id}/approve")
    public String approveSmartMeter(@PathVariable("id") String id) {
        return smartMeterService.approveSmartMeter(id);
    }

    //Reject Smart Meter
    @PutMapping("/{id}/reject")
    public String rejectSmartMeter(@PathVariable("id") String id) {
        return smartMeterService.rejectSmartMeter(id);
    }


    @PutMapping("/{id}/switch-provider")
    public String switchSmartMeter(@PathVariable("id") String id, @RequestBody Provider provider) {

        return smartMeterService.switchSmartMeter(id, provider);
    }
}
