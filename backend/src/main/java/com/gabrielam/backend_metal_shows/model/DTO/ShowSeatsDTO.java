package com.gabrielam.backend_metal_shows.model.DTO;

import java.time.LocalDate;
import java.util.List;

public record ShowSeatsDTO(
        Integer showId,
        String bandName,
        LocalDate showDate,
        Integer ticketPrice,
        String picture,

        Integer hallId,
        String hallName,
        String city,
        String country,
        String street,
        Integer rowsNum,
        Integer seatsPerRow,
        Integer totalSeats,

        List<ReservedSeatDTO> reservedSeats // 👈 רשימת מושבים תפוסים בלבד
) {}
