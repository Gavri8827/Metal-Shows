package com.gabrielam.backend_metal_shows.service;

import com.gabrielam.backend_metal_shows.model.*;
import com.gabrielam.backend_metal_shows.model.DTO.*;
import com.gabrielam.backend_metal_shows.repository.*;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReservationService {
    private final ReservationRepository reservationRepository;
    private final ShowRepository showRepository;
    private final SeatRepository seatRepository;
    private final ReservationSeatRepository reservationSeatRepository;

    public ReservationService(ReservationRepository reservationRepository, ShowRepository showRepository,
            SeatRepository seatRepository, ReservationSeatRepository reservationSeatRepository) {
        this.reservationRepository = reservationRepository;
        this.showRepository = showRepository;
        this.seatRepository = seatRepository;
        this.reservationSeatRepository = reservationSeatRepository;

    }

    // כל ההזמנות
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    // הזמנה לפי מזהה
    public Reservation getReservationDetails(Integer id) {
        return reservationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Reservation not found with ID: " + id));
    }

    // יצירת הזמנה חדשה
    public Reservation addNewReservation(ReservationRequestDTO requestDTO) {
        // שליפת מופע
        Show show = showRepository.findById(requestDTO.getShowId())
                .orElseThrow(() -> new EntityNotFoundException("Show not found with ID: " + requestDTO.getShowId()));

        // בניית הזמנה חדשה
        Reservation reservation = new Reservation();
        reservation.setPrivateName(requestDTO.getPrivateName());
        reservation.setFamilyName(requestDTO.getFamilyName());
        reservation.setMail(requestDTO.getMail());
        reservation.setResDate(requestDTO.getResDate());
        reservation.setShow(show);

        // שמירת ההזמנה כדי לקבל ID
        reservation = reservationRepository.save(reservation);

        // טיפול בכיסאות שהוזמנו
        for (SeatRequestDTO seatReq : requestDTO.getSeats()) {
            // שליפה או יצירה של מושב חדש בטבלת seats
            Seat seat = seatRepository.findByHall_HallIdAndRowNumAndChairNum(
                    show.getHall().getHallId(),
                    seatReq.getRowNum(),
                    seatReq.getChairNum()).orElseGet(() -> {
                        Seat newSeat = new Seat();
                        newSeat.setHall(show.getHall());
                        newSeat.setRowNum(seatReq.getRowNum());
                        newSeat.setChairNum(seatReq.getChairNum());
                        return seatRepository.save(newSeat);
                    });

            // בדיקה אם המושב הזה כבר תפוס במופע הזה
            boolean alreadyReserved = reservationSeatRepository
                    .findByReservation_Show_ShowId(show.getShowId())
                    .stream()
                    .anyMatch(rs -> rs.getSeat().getSeatId().equals(seat.getSeatId()));

            if (alreadyReserved) {
                throw new IllegalStateException("Seat already reserved: row " + seatReq.getRowNum() +
                        " chair " + seatReq.getChairNum());
            }

            // יצירת קשר חדש ReservationSeat
            ReservationSeat rs = new ReservationSeat();
            rs.setReservation(reservation);
            rs.setSeat(seat);
            reservationSeatRepository.save(rs);
        }

        return reservation;
    }

}
