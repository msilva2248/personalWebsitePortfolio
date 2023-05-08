package com.MySQLConnection.Backend.repository;

import com.MySQLConnection.Backend.model.AboutMe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AboutMeRepository extends JpaRepository<AboutMe, Long> {
}
