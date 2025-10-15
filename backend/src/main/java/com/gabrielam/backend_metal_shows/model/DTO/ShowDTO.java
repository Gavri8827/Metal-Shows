package com.gabrielam.backend_metal_shows.model.DTO;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class ShowDTO {
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate showDate;
    
    private Integer hallId;
    private Integer ticketPrice;
    private String bandName;
    private String picture;

}
