package com.gabrielam.backend_metal_shows.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.gabrielam.backend_metal_shows.model.Hall;
import com.gabrielam.backend_metal_shows.service.HallService;

@RestController
@RequestMapping("/api/halls")
@CrossOrigin(origins = "http://localhost:3000") // מאפשר קריאות מה-React שלך
public class HallController {
    private final HallService hallService;

    public HallController(HallService hallService) {
        this.hallService = hallService;
    }

    /** החזרת כל האולמות */
    @GetMapping
    public ResponseEntity<List<Hall>> getAllHalls() {
        return ResponseEntity.ok(hallService.getAllHalls());
    }

    /** אולם בודד */
    @GetMapping("/{id}")
    public ResponseEntity<Hall> getHall(@PathVariable Integer id) {
        return ResponseEntity.ok(hallService.getHallDetails(id));
    }

    /** יצירת אולם חדש (אדמין) */
    @PostMapping
    public ResponseEntity<Hall> createHall(@RequestBody Hall hall) {
        return ResponseEntity.ok(hallService.addNewHall(hall));
    }
}
