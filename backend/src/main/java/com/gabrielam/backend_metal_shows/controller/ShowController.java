package com.gabrielam.backend_metal_shows.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.gabrielam.backend_metal_shows.model.*;
import com.gabrielam.backend_metal_shows.model.DTO.*;
import com.gabrielam.backend_metal_shows.repository.*;
import com.gabrielam.backend_metal_shows.service.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/shows")
public class ShowController {

        private final ShowService showService;
        private final HallRepository hallRepository;
        private final ReservationSeatRepository reservationSeatRepository;

        public ShowController(ShowService showService, HallRepository hallRepository,
                        ReservationSeatRepository reservationSeatRepository) {
                this.showService = showService;
                this.hallRepository = hallRepository;
                this.reservationSeatRepository = reservationSeatRepository;
        }

        /** כל ההופעות לדף הבית */
        @GetMapping
        public ResponseEntity<List<ShowCardDTO>> getAllShows() {
                List<ShowCardDTO> shows = showService.getAllShows().stream()
                                .map(s -> new ShowCardDTO(
                                                s.getShowId(),
                                                s.getBandName(),
                                                s.getShowDate(),
                                                s.getTicketPrice(),
                                                s.getPicture(),
                                                s.getHall() != null ? s.getHall().getHallId() : null,
                                                s.getHall() != null ? s.getHall().getHallName() : null,
                                                s.getHall() != null ? s.getHall().getCity() : null,
                                                s.getHall() != null ? s.getHall().getCountry() : null,
                                                s.getHall() != null ? s.getHall().getStreet() : null))
                                .toList();

                return ResponseEntity.ok(shows);
        }

        /** יצירת/עדכון מופע (אדמין) */
        @PostMapping
        public ResponseEntity<Show> createShow(@RequestBody ShowDTO dto) {
                Show show = new Show();
                show.setShowDate(dto.getShowDate());
                show.setTicketPrice(dto.getTicketPrice());
                show.setBandName(dto.getBandName());
                show.setPicture(dto.getPicture());

                Hall hall = hallRepository.findById(dto.getHallId())
                                .orElseThrow(() -> new RuntimeException("Hall not found"));
                show.setHall(hall);

                return ResponseEntity.ok(showService.addNewShow(show));
        }

        /** פרטי מופע ספציפי */
        @GetMapping("/{id}")
        public ResponseEntity<ShowDetailsDTO> getShow(@PathVariable Integer id) {
                Show show = showService.getShowDetails(id);

                ShowDetailsDTO dto = new ShowDetailsDTO(
                                show.getShowId(),
                                show.getBandName(),
                                show.getShowDate(),
                                show.getTicketPrice(),
                                show.getPicture(),
                                show.getHall() != null ? show.getHall().getHallId() : null,
                                show.getHall() != null ? show.getHall().getHallName() : null,
                                show.getHall() != null ? show.getHall().getCity() : null);

                return ResponseEntity.ok(dto);
        }

        /**
         * חיפוש גמיש:
         * דוגמאות: /api/shows/search?band=Metallica
         * /api/shows/search?hallId=3&startDate=2025-09-10&endDate=2025-09-12
         */
        @GetMapping("/search")
        public ResponseEntity<List<Show>> searchShows(
                        @RequestParam(required = false) String band,
                        @RequestParam(required = false) Integer hallId,
                        @RequestParam(required = false) LocalDate startDate,
                        @RequestParam(required = false) LocalDate endDate) {
                return ResponseEntity.ok(showService.searchShows(band, hallId, startDate, endDate));
        }

        @GetMapping("/{id}/seats")
        public ResponseEntity<ShowSeatsDTO> seatsForShow(@PathVariable Integer id) {
                // שליפת מופע
                Show show = showService.getShowDetails(id);
                Hall hall = show.getHall();

                // שליפת מושבים תפוסים במופע הזה בלבד
                List<ReservedSeatDTO> reservedSeats = reservationSeatRepository
                                .findByReservation_Show_ShowId(id)
                                .stream()
                                .map(rs -> new ReservedSeatDTO(
                                                rs.getSeat().getRowNum(),
                                                rs.getSeat().getChairNum()))
                                .toList();

                // בניית DTO
                ShowSeatsDTO dto = new ShowSeatsDTO(
                                show.getShowId(),
                                show.getBandName(),
                                show.getShowDate(),
                                show.getTicketPrice(),
                                show.getPicture(),

                                hall.getHallId(),
                                hall.getHallName(),
                                hall.getCity(),
                                hall.getCountry(),
                                hall.getStreet(),
                                hall.getRowsNum(),
                                hall.getSeatsPerRow(),
                                hall.getTotalSeats(),

                                reservedSeats // 👈 שולחים רק תפוסים
                );

                return ResponseEntity.ok(dto);
        }

}
