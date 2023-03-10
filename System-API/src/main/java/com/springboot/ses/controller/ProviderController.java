package com.springboot.ses.controller;

import com.springboot.ses.pojo.Provider;
import com.springboot.ses.service.ProviderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("provider")
@CrossOrigin("*")
public class ProviderController {

    @Autowired
    private ProviderService providerService;

    @PostMapping("/enroll")
    public String enrollProvider(@RequestBody Provider newProvider) {
        return providerService.enrollProvider(newProvider);
    }

    @GetMapping("/check-rates")
    public List<Provider> checkRates() {
        return providerService.checkRates();
    }

    @GetMapping("/display")
    public List<Provider> getAllProviders() {
        return providerService.getAllProviders();
    }

    @PutMapping("update-status/{id}")
    public String updateStatus(@PathVariable String id) {
        return providerService.updateStatus(id);
    }

    @GetMapping
    public int getProviderRateByName(String provider){
        return providerService.getProviderRateByName(provider);
    }
}
