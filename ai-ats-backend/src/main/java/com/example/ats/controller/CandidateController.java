package com.example.ats.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.ats.entity.Candidate;
import com.example.ats.repository.CandidateRepository;

@RestController
@RequestMapping("/candidates")
@CrossOrigin(origins = "http://localhost:5173")
public class CandidateController {

    @Autowired
    private CandidateRepository candidateRepository;


    // Get all candidates
    @GetMapping
    public List<Candidate> getAllCandidates() {

        return candidateRepository.findAll();

    }


    // Get candidate by ID
    @GetMapping("/{id}")
    public Candidate getCandidateById(
            @PathVariable Long id
    ) {

        return candidateRepository
                .findById(id)
                .orElse(null);

    }


    // Add candidate
    @PostMapping
    public Candidate addCandidate(
            @RequestBody Candidate candidate
    ) {

        return candidateRepository.save(
                candidate
        );

    }


    // Delete candidate
    @DeleteMapping("/{id}")
    public String deleteCandidate(
            @PathVariable Long id
    ) {

        candidateRepository.deleteById(id);

        return "Candidate deleted successfully";

    }
}