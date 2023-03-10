package com.springboot.ses.controller;

import com.springboot.ses.SesApplication;
import com.springboot.ses.pojo.SmartMeter;
import com.springboot.ses.service.SmartMeterService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("smart-meter")
@CrossOrigin("*")
public class SmartMeterController {

    private static final Logger logger = LoggerFactory.getLogger(SesApplication.class);

    @Autowired
    private SmartMeterService smartMeterService;
    @PostMapping("/{id}/enroll")
    public String enrollSmartMeter(@PathVariable String id, @RequestBody String provider) {
        return smartMeterService.enroll(id, provider);
    }

    @GetMapping()
    public List<SmartMeter> getAllSmartMeters() {
        return smartMeterService.getAllSmartMeters();
    }

    @GetMapping("/{id}/display")
    public List<SmartMeter> getSmartMeters(@PathVariable("id") String id) {
        return smartMeterService.getSmartMeters(id);
    }

    @GetMapping("/requests")
    public List<SmartMeter> requestedSmartMeters() {
        return smartMeterService.requestedSmartMeters();
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
    public String switchSmartMeter(@PathVariable("id") String id, @RequestBody String provider) {

        return smartMeterService.switchSmartMeter(id, provider);
    }

    @PostMapping("/bill/{id}")
    public String generateBill(@PathVariable("id") String id) {
        return smartMeterService.generateBill(id);
    }
}
