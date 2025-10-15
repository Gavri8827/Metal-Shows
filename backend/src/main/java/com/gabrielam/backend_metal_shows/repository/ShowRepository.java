package com.gabrielam.backend_metal_shows.repository;

import com.gabrielam.backend_metal_shows.model.Show;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.time.*;
import java.util.List;

@Repository
public interface ShowRepository extends JpaRepository<Show, Integer> {
    //Show Search
    //Search show by band name in search box
    List<Show> findByBandNameContainingIgnoreCase(String bandName);

    //Search show by hall name in search box
    List<Show> findByHall_HallId(Integer hallId);

    //Search show by date in search box
    List<Show> findByShowDateBetween(LocalDate start,LocalDate end);

    //Query to allow search with empty fields
     @Query("""
        select s
        from Show s
        where (:band is null or lower(s.bandName) like lower(concat('%', :band, '%')))
          AND (:hallId IS NULL OR s.hall.id = :hallId)
          and (:startDate is null or s.showDate >= :startDate)
          and (:endDate   is null or s.showDate <= :endDate)
        order by s.showDate desc, s.bandName asc
    """)
    List<Show> searchFlexible(
            @Param("band") String band,
            @Param("hallId") Integer hallId,
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate
            );
}
