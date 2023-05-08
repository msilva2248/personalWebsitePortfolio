package com.MySQLConnection.Backend.controller;

import com.MySQLConnection.Backend.model.AboutMe;
import com.MySQLConnection.Backend.repository.AboutMeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class AboutMeController {

    @Autowired
    private AboutMeRepository aboutMeRepository;

    @PostMapping("/about")
    AboutMe newAboutMe(@RequestBody AboutMe newAboutMe) {
        return aboutMeRepository.save(newAboutMe);
    }

    @GetMapping("/about/me")
    List<AboutMe> getAllAboutMe() {
        return aboutMeRepository.findAll();
    }
}
