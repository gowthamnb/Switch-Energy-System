package com.springboot.ses.service;

import com.springboot.ses.pojo.Provider;
import com.springboot.ses.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProviderService {

    private int initialId = 1;

    @Autowired
    private ProviderRepository providerRepository;

    public String enrollProvider(Provider newProvider) {
        newProvider.setId(generateId());
        newProvider.setStatus("Enabled");
        return providerRepository.enrollProvider(newProvider);
    }

    private String generateId() {
        String smartMeterId = "Pro" + initialId++;
        return smartMeterId;
    }

    public String updateStatus(String id, Provider updateProvider) {
        return providerRepository.updateStatus(id, updateProvider);
    }

    public List<Provider> checkRates() {
        return providerRepository.checkRates();
    }
}
