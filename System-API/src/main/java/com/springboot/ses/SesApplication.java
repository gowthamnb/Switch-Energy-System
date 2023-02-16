package com.springboot.ses;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SesApplication {

	public static void main(String[] args) {
		SpringApplication.run(SesApplication.class, args);
	}

}
