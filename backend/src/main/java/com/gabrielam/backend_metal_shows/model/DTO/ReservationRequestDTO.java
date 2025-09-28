package com.gabrielam.backend_metal_shows.model.DTO;

import java.time.LocalDate;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationRequestDTO {
    private String privateName;
    private String familyName;
    private String mail;
    private LocalDate resDate;
    private Integer showId;
    private List<SeatRequestDTO> seats;  // רשימת כיסאות לבחירה
}
