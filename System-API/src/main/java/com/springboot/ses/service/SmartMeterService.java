package com.springboot.ses.service;

import com.springboot.ses.SesApplication;
import com.springboot.ses.pojo.Reading;
import com.springboot.ses.pojo.SmartMeter;
import com.springboot.ses.repository.SmartMeterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Service
public class SmartMeterService {

    private static final Logger logger = LoggerFactory.getLogger(SesApplication.class);

    @Autowired
    private SmartMeterRepository smartMeterRepository;

    @Scheduled(cron="1 * * * * *")
    public void generateReading() {
        logger.info("generated");
        smartMeterRepository.generateReadings();
    }

    public String enroll(String id, String provider) {
        SmartMeter smartMeter = new SmartMeter();
//        smartMeter.setId(generateId(id));
        smartMeter.setUserId(id);
        smartMeter.setProviderName(provider);
        smartMeter.setStatus("Pending");
        return smartMeterRepository.enroll(smartMeter);
    }

    private String generateId(String id) {
        String prefix[] = id.split("@");
        String smartMeterId = prefix[0] + "@smart";
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


    public String switchSmartMeter(String id, String provider) {
        return smartMeterRepository.switchSmartMeter(id, provider);
    }

    public List<SmartMeter> getAllSmartMeters() {
        return smartMeterRepository.getAllSmartMeters();
    }
}
