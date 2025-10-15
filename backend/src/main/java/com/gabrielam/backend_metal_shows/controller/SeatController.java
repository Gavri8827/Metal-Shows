package com.gabrielam.backend_metal_shows.controller;

import com.gabrielam.backend_metal_shows.model.Seat;
import com.gabrielam.backend_metal_shows.service.SeatService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class SeatController {

    private final SeatService seatService;

    public SeatController(SeatService seatService) {
        this.seatService = seatService;
    }

    /** כל המושבים באולם (לציור מפה בפרונט) */
    @GetMapping("/halls/{hallId}/seats")
    public ResponseEntity<List<Seat>> getAllSeatsInHall(@PathVariable Integer hallId) {
        return ResponseEntity.ok(seatService.getAllSeatsInHall(hallId));
    }

    /** איתור מושב יחיד לפי אולם+שורה+כיסא (בדיקות תקינות/אדמין) */
    @GetMapping("/halls/{hallId}/seats/lookup")
    public ResponseEntity<Seat> getSeatByDetails(@PathVariable Integer hallId,
                                                 @RequestParam Integer rowNum,
                                                 @RequestParam Integer chairNum) {
        return ResponseEntity.ok(seatService.getSeatByDetails(hallId, rowNum, chairNum));
    }
}
