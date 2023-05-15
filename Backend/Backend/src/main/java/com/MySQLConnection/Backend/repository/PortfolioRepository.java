package com.MySQLConnection.Backend.repository;

import com.MySQLConnection.Backend.model.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
}
