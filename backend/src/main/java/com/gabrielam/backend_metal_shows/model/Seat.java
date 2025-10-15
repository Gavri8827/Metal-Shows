package com.gabrielam.backend_metal_shows.model;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "seats")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Seat {

    /** seats_id  (PK, AUTO_INCREMENT) */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seat_id")
    private Integer seatId;

    /** row  INT – שורת הישיבה */
    @Column(name = "row_num")
    private Integer rowNum;          // camelCase שונה → ממופה לעמודה row

    /** chair  INT – מספר כיסא */
    @Column(name = "chair_num")
    private Integer chairNum;

    /* FK → halls.hall_id (Many seats ↠ One hall) */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hall_id")
    private Hall hall;

}
