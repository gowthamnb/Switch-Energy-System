package com.springboot.ses.pojo;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection="charged_bills")
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

    public String getSmartMeterId() {
        return smartMeterId;
    }

    public void setSmartMeterId(String smartMeterId) {
        this.smartMeterId = smartMeterId;
    }

    public LocalDateTime getGeneratedDateAndTime() {
        return generatedDateAndTime;
    }

    public void setGeneratedDateAndTime(LocalDateTime generatedDateAndTime) {
        this.generatedDateAndTime = generatedDateAndTime;
    }

    public double getReading() {
        return reading;
    }

    public void setReading(double reading) {
        this.reading = reading;
    }

    public double getBillAmount() {
        return billAmount;
    }

    public void setBillAmount(double billAmount) {
        this.billAmount = billAmount;
    }
}
