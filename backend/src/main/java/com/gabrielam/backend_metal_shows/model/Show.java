package com.gabrielam.backend_metal_shows.model;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.*;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="shows")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Show {

    /* id_show  (PK, AUTO_INCREMENT) */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="show_id")
    private Integer showId;

    @Column(name="band_name",length=100)
    private String bandName;

    @Column(name="show_date")
    private LocalDate showDate; 

    @Column(name="ticket_price")
    private Integer ticketPrice;

    @Column(name = "picture", length = 255)
    private String picture;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hall_id")
    @JsonManagedReference
    @JsonIgnore
    private Hall hall;  


}
