package com.gabrielam.backend_metal_shows.model.DTO;

import java.time.LocalDate;

public record ReservationDTO(
    Integer reservationId,
    String privateName,
    String familyName,
    String mail,
    LocalDate resDate,
    String bandName,
    Integer ticketPrice,
    Integer seatsCount
) {}
