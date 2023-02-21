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
//        newProvider.setId(generateId());
        newProvider.setIsEnabled(true);
        return providerRepository.enrollProvider(newProvider);
    }

    private String generateId() {
        String providerId = "Pro@" + initialId++;
        return providerId;
    }

    public String updateStatus(String id) {
        return providerRepository.updateStatus(id);
    }

    public List<Provider> checkRates() {
        return providerRepository.checkRates();
    }

    public List<Provider> getAllProviders() {

        return providerRepository.getAllProviders();
    }
}
