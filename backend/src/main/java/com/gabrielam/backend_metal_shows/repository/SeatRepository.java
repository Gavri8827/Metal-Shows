package com.gabrielam.backend_metal_shows.repository;

import com.gabrielam.backend_metal_shows.model.Seat;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Integer> {
    
   // כל המושבים באולם מסוים לפי ID (לשליפת כל המושבים לבניית המפה)
    List<Seat> findByHall_HallId(Integer hallId);

    // מציאת כיסא מסוים לפי אולם+שורה+כיסא (לצורך שמירת הזמנה)
    Optional<Seat> findByHall_HallIdAndRowNumAndChairNum(Integer hallId, Integer rowNum, Integer chairNum);
    

}