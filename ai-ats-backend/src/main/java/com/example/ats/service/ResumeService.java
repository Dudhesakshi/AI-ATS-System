package com.example.ats.service;

import com.example.ats.entity.Candidate;
import com.example.ats.repository.CandidateRepository;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@Service
public class ResumeService {

    @Autowired
    private CandidateRepository candidateRepository;

    public Map<String,Object> analyzeResume(
            MultipartFile file) {

        Map<String,Object> result =
                new HashMap<>();

        try {

            PDDocument document =
                    Loader.loadPDF(file.getBytes());

            PDFTextStripper stripper =
                    new PDFTextStripper();

            String text =
                    stripper.getText(document);

            document.close();


            List<String> skills =
                    new ArrayList<>();

            String[] predefinedSkills = {

                    "Java",
                    "Spring Boot",
                    "React",
                    "MySQL",
                    "Python",
                    "HTML",
                    "CSS",
                    "JavaScript"
            };


            for(String skill : predefinedSkills){

                if(text.toLowerCase()
                        .contains(skill.toLowerCase())){

                    skills.add(skill);
                }
            }


            int score =
                    Math.min(skills.size()*12,100);


            List<String> suggestions =
                    new ArrayList<>();

            if(!skills.contains("DSA")){

                suggestions.add(
                        "Add Data Structures & Algorithms"
                );
            }

            if(!skills.contains("AWS")){

                suggestions.add(
                        "Learn AWS / Cloud"
                );
            }

            if(!skills.contains("Docker")){

                suggestions.add(
                        "Learn Docker"
                );
            }


            Candidate candidate =
                    new Candidate();

            candidate.setName(
                    file.getOriginalFilename()
            );

            candidate.setScore(
                    score
            );

            candidateRepository.save(
                    candidate
            );


            result.put(
                    "candidate",
                    file.getOriginalFilename()
            );

            result.put(
                    "score",
                    score
            );

            result.put(
                    "skills",
                    skills
            );

            result.put(
                    "suggestions",
                    suggestions
            );

        }

        catch(Exception e){

            e.printStackTrace();

            result.put(
                    "error",
                    e.getMessage()
            );
        }

        return result;
    }
}