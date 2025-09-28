package com.gabrielam.backend_metal_shows.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.gabrielam.backend_metal_shows.model.*;
import com.gabrielam.backend_metal_shows.model.DTO.*;
import com.gabrielam.backend_metal_shows.repository.*;
import com.gabrielam.backend_metal_shows.service.*;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin(origins = "http://localhost:3000")
public class ReservationController {

    private final ReservationService reservationService;
    private final ReservationSeatRepository reservationSeatRepository;

    public ReservationController(ReservationService reservationService,
                                 ReservationSeatRepository reservationSeatRepository) {
        this.reservationService = reservationService;
        this.reservationSeatRepository = reservationSeatRepository;
    }


    /** כל ההזמנות (אדמין) */
    @GetMapping
    public ResponseEntity<List<ReservationDTO>> getAllReservations() {
        List<ReservationDTO> dtos = reservationService.getAllReservations().stream()
                .map(r -> new ReservationDTO(
                        r.getReservationid(),
                        r.getPrivateName(),
                        r.getFamilyName(),
                        r.getMail(),
                        r.getResDate(),
                        r.getShow() != null ? r.getShow().getBandName() : null,
                        r.getShow() != null ? r.getShow().getTicketPrice() : null,
                        reservationSeatRepository.findByReservation_Reservationid(r.getReservationid()).size()
                ))
                .toList();

        return ResponseEntity.ok(dtos);
    }


    /** פרטי הזמנה */
    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservation(@PathVariable Integer id) {
        return ResponseEntity.ok(reservationService.getReservationDetails(id));
    }

    /** יצירת הזמנה חדשה (הפעולה המרכזית של רכישה) */
    @PostMapping
    public ResponseEntity<Reservation> createReservation(@RequestBody ReservationRequestDTO requestDTO) {
        Reservation created = reservationService.addNewReservation(requestDTO);
        return ResponseEntity.ok(created);
    }

    /** (אופציונלי) כל ההזמנות למופע מסוים */
    @GetMapping("/by-show/{showId}")
    public ResponseEntity<List<Reservation>> getReservationsByShow(@PathVariable Integer showId) {
        return ResponseEntity.ok(reservationService.getAllReservations()
                .stream()
                .filter(r -> r.getShow().getShowId().equals(showId))
                .toList());
    }
}