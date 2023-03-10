package com.springboot.ses.service;

import com.springboot.ses.repository.CalculateBillAmountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CalculateBillAmountService {

    @Autowired
    private CalculateBillAmountRepository calculateBillAmountRepository;

    public double calculateBills(String id) {
        return calculateBillAmountRepository.calculateBills(id);
    }
}
