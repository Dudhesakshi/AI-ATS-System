package com.example.ats.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ats.entity.Candidate;

public interface CandidateRepository
        extends JpaRepository<Candidate, Long> {

}