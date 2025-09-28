package com.gabrielam.backend_metal_shows.repository;

import com.gabrielam.backend_metal_shows.model.ReservationSeat;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReservationSeatRepository extends JpaRepository<ReservationSeat, Integer> {
    List<ReservationSeat> findByReservation_Show_ShowId(Integer showId);

    // כל המושבים בהזמנה מסוימת
    List<ReservationSeat> findByReservation_Reservationid(Integer reservationId);
}

