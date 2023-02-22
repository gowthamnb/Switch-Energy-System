package com.springboot.ses.pojo;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Reading {

    private double reading;
    private LocalDateTime dateAndTime;

    public Reading(double reading) {
        this.reading = reading;
        this.dateAndTime = LocalDateTime.now();
    }

    public double getReading() {
        return reading;
    }

    public void setReading(double reading) {
        this.reading = reading;
    }

    public LocalDateTime getDateAndTime() {
        return dateAndTime;
    }

    public void setDateAndTime(LocalDateTime dateAndTime) {
        this.dateAndTime = dateAndTime;
    }
}
