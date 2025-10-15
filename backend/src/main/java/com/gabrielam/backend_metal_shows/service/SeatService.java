package com.gabrielam.backend_metal_shows.service;

import com.gabrielam.backend_metal_shows.model.Seat;
import com.gabrielam.backend_metal_shows.repository.SeatRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatService {

    private final SeatRepository seatRepository;

    public SeatService(SeatRepository seatRepository) {
        this.seatRepository = seatRepository;
    }

    public List<Seat> findByHallId(Integer hallId) {
        return seatRepository.findByHall_HallId(hallId);
    }

    // שליפת כל המושבים באולם (עבור ציור המפה)
    public List<Seat> getAllSeatsInHall(Integer hallId) {
        return seatRepository.findByHall_HallId(hallId);
    }

    // מציאת כיסא לפי אולם+שורה+כיסא
    public Seat getSeatByDetails(Integer hallId, Integer rowNum, Integer chairNum) {
        return seatRepository.findByHall_HallIdAndRowNumAndChairNum(hallId, rowNum, chairNum)
                .orElseThrow(() -> new EntityNotFoundException("Seat not found"));
    }

    // שמירת מושב בודד (לשימוש אפשרי בעת שמירה ידנית או הזמנה)
    public Seat saveSeat(Seat seat) {
        return seatRepository.save(seat);
    }

    // שמירה מרובה של מושבים (לצורך הזמנה של מספר מושבים בבת אחת)
    public List<Seat> saveAllSeats(List<Seat> seats) {
        return seatRepository.saveAll(seats);
    }
}
