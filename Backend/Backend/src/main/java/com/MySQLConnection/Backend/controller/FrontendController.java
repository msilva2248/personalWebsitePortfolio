package com.MySQLConnection.Backend.controller;

import com.MySQLConnection.Backend.model.Frontend;
import com.MySQLConnection.Backend.repository.FrontendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

// used to request resources from another domain
// in this case, the frontend is requesting the extracted data from the backend database
@CrossOrigin("http://personalwebportfolio.s3-website-us-west-1.amazonaws.com/")
public class FrontendController {

    @Autowired
    private FrontendRepository frontendRepository;


    // POST and GET handle HTTP requests that match the given urls below "/frontend", "/frontend/skills"
    // Postman is a platform that allows you to make Rest API requests to a url
    // within postman, you create a get, post, any request to the url that was given in these mapping annotations
    // the annotations then map to and perform the request given and return the results
    @PostMapping("/frontend")
    Frontend newFrontend(@RequestBody Frontend newFrontend) {
        return frontendRepository.save(newFrontend);
    }

    @GetMapping("/frontend/skills")
    List<Frontend> getAllFrontendSkills() {
        return frontendRepository.findAll();
    }
}
