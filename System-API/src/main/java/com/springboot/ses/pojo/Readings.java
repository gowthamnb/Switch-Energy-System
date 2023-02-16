package com.springboot.ses.pojo;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="readings")
public class Readings {

    @Id
    private String id;

    private String smartMeterId;
}
