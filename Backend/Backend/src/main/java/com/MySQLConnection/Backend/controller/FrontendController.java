package com.MySQLConnection.Backend.controller;

import com.MySQLConnection.Backend.model.Frontend;
import com.MySQLConnection.Backend.repository.FrontendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://personalwebportfolio.s3-website-us-west-1.amazonaws.com/")
public class FrontendController {

    @Autowired
    private FrontendRepository frontendRepository;

    @PostMapping("/frontend")
    Frontend newFrontend(@RequestBody Frontend newFrontend) {
        return frontendRepository.save(newFrontend);
    }

    @GetMapping("/frontend/skills")
    List<Frontend> getAllFrontendSkills() {
        return frontendRepository.findAll();
    }
}
