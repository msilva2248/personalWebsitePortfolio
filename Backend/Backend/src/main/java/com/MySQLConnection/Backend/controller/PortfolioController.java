package com.MySQLConnection.Backend.controller;

import com.MySQLConnection.Backend.model.Portfolio;
import com.MySQLConnection.Backend.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class PortfolioController {

    @Autowired
    private PortfolioRepository portfolioRepository;

    @PostMapping("/portfolio")
    Portfolio newPortfolio(@RequestBody Portfolio newPortfolio) {
        return portfolioRepository.save(newPortfolio);
    }

    @GetMapping("/portfolio/projects")
    List<Portfolio> getAllPortfolioProjects() {
        return portfolioRepository.findAll();
    }
}
