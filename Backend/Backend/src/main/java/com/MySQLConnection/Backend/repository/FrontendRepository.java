package com.MySQLConnection.Backend.repository;

import com.MySQLConnection.Backend.model.Frontend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FrontendRepository extends JpaRepository<Frontend, Long> {
}
