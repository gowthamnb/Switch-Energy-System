package com.springboot.ses.controller;

import com.springboot.ses.service.CalculateBillAmountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("bills")
@CrossOrigin("*")
public class CalculateBillAmountController {

    @Autowired
    private CalculateBillAmountService calculateBillAmountService;

    @GetMapping("/calculate/{id}")
    public double calculateBills(@PathVariable String id) {
        return calculateBillAmountService.calculateBills(id);
    }

}
