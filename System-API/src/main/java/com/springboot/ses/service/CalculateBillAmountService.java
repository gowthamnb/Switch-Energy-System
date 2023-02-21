package com.springboot.ses.service;

import com.springboot.ses.pojo.CalculateBillAmount;
import com.springboot.ses.repository.CalculateBillAmountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalculateBillAmountService {

    @Autowired
    private CalculateBillAmountRepository calculateBillAmountRepository;

    public List<CalculateBillAmount> calculateBills(String id) {
        return calculateBillAmountRepository.calculateBills(id);
    }
}
