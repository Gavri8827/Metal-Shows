package com.gabrielam.backend_metal_shows.model.DTO;

public record SeatDTO(
        Integer seatId,
        Integer rowNum ,
        Integer chairNum,
        boolean reserved
) {}