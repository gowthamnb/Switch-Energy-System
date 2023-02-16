package com.springboot.ses.pojo;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection="readings")
public class Readings {

    private String smartMeterId;
    private boolean isEnabled;
    private ArrayList<Reading> generatedReadings;

    public Readings(String smartMeterId) {
        this.smartMeterId = smartMeterId;
        this.isEnabled = true;
        this.generatedReadings = new ArrayList<>();
    }

    public String getSmartMeterId() {
        return smartMeterId;
    }

    public void setSmartMeterId(String smartMeterId) {
        this.smartMeterId = smartMeterId;
    }

    public boolean isEnabled() {
        return isEnabled;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }

    public ArrayList<Reading> getGeneratedReadings() {
        return generatedReadings;
    }

    public void setGeneratedReadings(ArrayList<Reading> generatedReadings) {
        this.generatedReadings = generatedReadings;
    }
}
