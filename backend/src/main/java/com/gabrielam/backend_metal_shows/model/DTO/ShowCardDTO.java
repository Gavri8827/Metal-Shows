package com.gabrielam.backend_metal_shows.model.DTO;

import java.time.LocalDate;

public record ShowCardDTO(
        Integer showId,
        String bandName,
        LocalDate showDate,
        Integer ticketPrice,
        String picture,
        Integer hallId,
        String city,
        String country,
        String street
) {}
