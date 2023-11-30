package com.qradmin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class QrAdminApplication {

	public static void main(String[] args) {
		SpringApplication.run(QrAdminApplication.class, args);
	}

}
