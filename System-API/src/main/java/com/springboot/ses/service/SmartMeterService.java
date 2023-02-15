package com.springboot.ses.service;

import com.springboot.ses.pojo.Provider;
import com.springboot.ses.pojo.SmartMeter;

import com.springboot.ses.repository.SmartMeterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SmartMeterService {

    private int initialId = 1;

    @Autowired
    private SmartMeterRepository smartMeterRepository;

    public String enroll(String id, Provider provider) {
        SmartMeter smartMeter = new SmartMeter();
        smartMeter.setId(generateId());
        smartMeter.setUserId(id);
        smartMeter.setProviderName(provider.getName());
        smartMeter.setStatus("Pending");
        return smartMeterRepository.enroll(smartMeter);
    }

    private String generateId() {
        String smartMeterId = "SMART" + initialId++;
        return smartMeterId;
    }

    public List<SmartMeter> getSmartMeters(String id) {
        return smartMeterRepository.getSmartMeters(id);
    }

    public List<SmartMeter> requestedSmartMeters() {
        return smartMeterRepository.requestedSmartMeters();
    }

    public String approveSmartMeter(String id) {
        return smartMeterRepository.approveSmartMeter(id);
    }

    public String rejectSmartMeter(String id) {
        return smartMeterRepository.rejectSmartMeter(id);
    }


    public String switchSmartMeter(String id, Provider provider) {
        return smartMeterRepository.switchSmartMeter(id, provider);
    }
}
