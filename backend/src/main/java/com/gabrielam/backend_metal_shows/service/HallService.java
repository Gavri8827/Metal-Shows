package com.gabrielam.backend_metal_shows.service;

import com.gabrielam.backend_metal_shows.model.Hall;
import com.gabrielam.backend_metal_shows.repository.HallRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class HallService {
    private final HallRepository repo;

    public HallService(HallRepository repo) {
        this.repo = repo;
    }

    /** כל האולמות */
    public List<Hall> getAllHalls() {
        return repo.findAll();
    }

    /** אולם בודד לפי ID */
    public Hall getHallDetails(Integer id) {
        return repo.findById(id)
                   .orElseThrow(() -> new NoSuchElementException("Hall " + id + " not found"));
    }

    /** יצירת אולם חדש */
    public Hall addNewHall(Hall hall) {
        return repo.save(hall);
    }
}
