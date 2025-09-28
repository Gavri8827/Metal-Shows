package com.gabrielam.backend_metal_shows.repository;

import com.gabrielam.backend_metal_shows.model.Hall;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HallRepository extends JpaRepository<Hall,Integer>{
     // אין צורך במתודות מיוחדות מעבר ל־findById ול־save – כבר מובנות    
} 
    
