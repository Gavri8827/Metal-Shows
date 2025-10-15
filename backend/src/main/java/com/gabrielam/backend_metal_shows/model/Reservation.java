package com.gabrielam.backend_metal_shows.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "reservations")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Reservation {

    /** reservation_id  (PK, AUTO_INCREMENT) */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_id")
    private Integer reservationid;

    /** private_name  VARCHAR(100) */
    @Column(name = "private_name", length = 100, nullable = false)
    private String privateName;          // שם פרטי של המזמין

    /** family_name  VARCHAR(100) */
    @Column(name = "family_name", length = 100, nullable = false)
    private String familyName;           // שם משפחה

    /** mail  VARCHAR(100) */
    @Column(name = "mail", length = 100, nullable = false)
    private String mail;                 // אימייל קונה

    /** date  DATE – תאריך ביצוע ההזמנה */
    @Column(name = "date")
    private LocalDate resDate;              

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "show_id")
    private Show show;

    @OneToMany(mappedBy = "reservation", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ReservationSeat> reservationSeats = new ArrayList<>();


}
