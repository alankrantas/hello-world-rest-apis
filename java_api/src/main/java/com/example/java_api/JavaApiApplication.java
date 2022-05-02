package com.example.java_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

class Msg {
    public final String message;

    public Msg(String message) {
        this.message = message;
    }
}

@SpringBootApplication
@RestController
public class JavaApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaApiApplication.class, args);
	}

	@GetMapping("/")
	public ResponseEntity<Msg> handler(@RequestParam(value = "name", defaultValue = "World") String name) {
		String message = String.format("Hello %s!", name);
		Msg msg = new Msg(message.trim());
		return new ResponseEntity<>(msg, HttpStatus.OK);
	}

}