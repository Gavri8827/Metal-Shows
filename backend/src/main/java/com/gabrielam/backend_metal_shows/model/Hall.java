package com.gabrielam.backend_metal_shows.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "halls")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Hall {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hall_id")
    private Integer hallId;

    @Column(name = "hall_name",length = 100)
    private String hallName;

    @Column(name = "country",length = 100)
    private String country;

    @Column(name = "city",length = 100)
    private String city;

    @Column(name = "street", length = 100)
    private String street;

    @Column(name = "rows_num")
    private Integer rowsNum;

    @Column(name = "seats_per_row")
    private Integer seatsPerRow;

    @Column(name = "total_seats")
    private Integer totalSeats;


    @OneToMany(mappedBy = "hall", fetch = FetchType.LAZY)
    @JsonBackReference
    @JsonIgnore
    private List<Show> shows = new ArrayList<>();
}

