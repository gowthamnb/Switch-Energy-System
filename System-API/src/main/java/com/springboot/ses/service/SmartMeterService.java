package com.springboot.ses.service;

import com.springboot.ses.pojo.Provider;
import com.springboot.ses.pojo.SmartMeter;

import com.springboot.ses.repository.SmartMeterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SmartMeterService {

    private int initialId = 1;

    @Autowired
    private SmartMeterRepository smartMeterRepository;

    public String enroll(Provider provider) {
        SmartMeter smartMeter = new SmartMeter();
        smartMeter.setId(generateId());
        smartMeter.setProviderName(provider.getName());
        smartMeter.setStatus("Pending");
        return smartMeterRepository.enroll(smartMeter);
    }

    private String generateId() {
        String smartMeterId = "SMART" + initialId++;
        return smartMeterId;
    }
}
