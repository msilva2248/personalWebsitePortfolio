package com.MySQLConnection.Backend.controller;

import com.MySQLConnection.Backend.model.Backend;
import com.MySQLConnection.Backend.repository.BackendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://personalwebportfolio.s3-website-us-west-1.amazonaws.com/")
public class BackendController {

    @Autowired
    private BackendRepository backendRepository;

    @PostMapping("/backend")
    Backend newBackend(@RequestBody Backend newBackend) {
        return backendRepository.save(newBackend);
    }

    @GetMapping("/backend/skills")
    List<Backend> getAllBackendSkills() {
        return backendRepository.findAll();
    }
}
