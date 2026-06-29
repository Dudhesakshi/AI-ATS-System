package com.example.ats.controller;

import com.example.ats.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/resume")
@CrossOrigin(origins = "http://localhost:5173")

public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @PostMapping("/upload")
    public Map<String,Object> uploadResume(
            @RequestParam("file") MultipartFile file)
            throws Exception {

        return resumeService.analyzeResume(file);

    }
}