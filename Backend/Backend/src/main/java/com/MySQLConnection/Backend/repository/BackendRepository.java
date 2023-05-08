package com.MySQLConnection.Backend.repository;

import com.MySQLConnection.Backend.model.Backend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BackendRepository extends JpaRepository<Backend, Long> {
}
