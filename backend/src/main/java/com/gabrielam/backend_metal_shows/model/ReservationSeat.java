package com.gabrielam.backend_metal_shows.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "reservation_seats")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReservationSeat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_seat_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reservation_id", nullable = false)
    private Reservation reservation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seat_id", nullable = false)
    private Seat seat;

}
