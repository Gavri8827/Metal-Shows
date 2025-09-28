package com.gabrielam.backend_metal_shows.repository;
import com.gabrielam.backend_metal_shows.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    //find Reservation by ID,FindAll
    // מתודה שניתנת לי אוטומטית כבר

    List<Reservation> findByResDate(LocalDate resDate);

    // כל ההזמנות למופע מסוים
    List<Reservation> findByShow_ShowId(Integer showId);

}