package com.gabrielam.backend_metal_shows.service;

import com.gabrielam.backend_metal_shows.model.Show;
import com.gabrielam.backend_metal_shows.repository.ShowRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ShowService {

    private final ShowRepository showRepository;

    public ShowService(ShowRepository showRepository) {
        this.showRepository = showRepository;
    }

    public Show getShowId(Integer id) {
        return showRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Show not found"));
    }

    /** כל ההופעות) */
    public List<Show> getAllShows() {
        var list = showRepository.findAll();
        return list;
    }

    /** יצירת/עדכון מופע */
    public Show addNewShow(Show show) {
        return showRepository.save(show);
    }

    /** פרטי מופע לפי מזהה; אם לא קיים – זורק NoSuchElementException */
    public Show getShowDetails(Integer id) {
        return showRepository.findById(id)
                   .orElseThrow(() -> new NoSuchElementException("Show " + id + " not found"));
    }

    /**
     * חיפוש משולב:
     * - band: טקסט חופשי (ContainingIgnoreCase)
     * - hall: ערך מרשימה נפתחת (התאמה מלאה / contains – לפי הריפוזיטורי שלך)
     * - start/end: טווח תאריכים; אם נשלח רק start → נחפש את אותו יום
     *
     * מחזיר רשימה ריקה אם אין תוצאות (הפרונט מציג "לא נמצאו הופעות מתאימות").
     */
    public List<Show> searchShows(String bandInput,
                                  Integer hallId,
                                  LocalDate startDate,
                                  LocalDate endDate) {

        String band = normalize(bandInput);

        // אם נבחר רק תאריך התחלה – נהפוך לטווח של יום אחד
        if (startDate != null && endDate == null) endDate = startDate;
        // אחרת – שימוש בשאילתה הגמישה שתומכת בפרמטרים null
        return showRepository.searchFlexible(band, hallId, startDate, endDate);
    }

    /** ממיר מחרוזת ריקה/null ל-null, וגם trim */
    private String normalize(String s) {
        return (s != null && !s.isBlank()) ? s.trim() : null;
    }
}
