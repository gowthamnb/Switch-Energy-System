package com.springboot.ses.controller;

import com.springboot.ses.pojo.CalculateBillAmount;
import com.springboot.ses.service.CalculateBillAmountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("bills")
public class CalculateBillAmountController {

    @Autowired
    private CalculateBillAmountService calculateBillAmountService;

    @PostMapping("calculate/{id}")
    public List<CalculateBillAmount> calculateBills(@PathVariable("id") String id) {
        return calculateBillAmountService.calculateBills(id);
    }
}
