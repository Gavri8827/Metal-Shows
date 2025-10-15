package com.gabrielam.backend_metal_shows.model.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class SeatRequestDTO {
    private int rowNum;
    private int chairNum;
}
