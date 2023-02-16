package com.springboot.ses.pojo;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection="charged_amount")
@Data
public class CalculateBillAmount {

    private String smartMeterId;
    private LocalDateTime generatedDateAndTime;
    private double reading;
    private double billAmount;

    public CalculateBillAmount(String smartMeterId) {
        this.smartMeterId = smartMeterId;
        this.generatedDateAndTime = LocalDateTime.now();
        this.reading = 0;
        this.billAmount = 0;
    }
}
