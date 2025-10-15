import '../styles/HomePage.css';
import SearchBox from "../components/SearchBox";
import DateBox from "../components/DateBox";
import FilterBox from "../components/FilterBox";
import ShowCard from '../components/ShowCard';
import { useEffect, useState } from "react";

function HomePage() {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/api/shows")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched shows from backend:", data);
        console.log("✅ Shows from backend:", data.map(s => s.showDate));
        setShows(data);
        setFilteredShows(data);
      })
      .catch(err => console.error("Error fetching shows:", err));
  }, []);

  // פונקציית סינון מרכזית
  const applyFilters = () => {
    let results = [...shows];

    // חיפוש לפי שם להקה
    if (query && query.trim() !== "") {
      results = results.filter(show =>
        show.bandName?.toLowerCase().includes(query.toLowerCase())
      );
    }

    // סינון לפי מדינה
    if (location && location !== "") {
      results = results.filter(show => {
        // בדיקה גמישה יותר - תומך גם ב-country וגם ב-location
        const showCountry = show.hall?.country || show.country || show.location;
        return showCountry?.toLowerCase() === location.toLowerCase();
      });
    }

    // סינון לפי טווח תאריכים
    if (startDate || endDate) {
      console.log("📅 Filtering by dates:", { startDate, endDate });
      results = results.filter(show => {
        // אם אין תאריך -> לא מציגים את ההופעה
        if (!show.showDate) return false;

        console.log("📅 raw show.date:", show.showDate);

        // יצירת אובייקט Date מתוך "YYYY-MM-DD"
        const [year, month, day] = show.showDate.split("-");
        const showDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

        console.log("👉 parsed showDate:", showDate);

        // ניקוי שעות מהתאריכים שהמשתמש בחר
        const start = startDate ? new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) : null;
        const end = endDate ? new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) : null;

        console.log("🔎 comparing:", { showDate, start, end });

        if (start && !end) {
          return showDate >= start;
        }

        if (!start && end) {
          return showDate <= end;
        }

        if (start && end) {
          return showDate >= start && showDate <= end;
        }

        return true;
      });
    }



    setFilteredShows(results);
  };

  // עדכון הסינון בכל שינוי
  useEffect(() => {
    applyFilters();
  }, [query, location, startDate, endDate, shows]);

  // פונקציה לניקוי כל הפילטרים
  const clearFilters = () => {
    setQuery("");
    setLocation("");
    setStartDate(null);
    setEndDate(null);
    setFilteredShows(shows);
  };

  return (
    <div className="HomePageContainer">
      <h2>Worldwide Metal Shows Tickets</h2>

      <div className="filters-row">
      {/* מסגרת 1 - חיפוש חופשי */}
      <div className="filter-box search-box-wrapper">
        <SearchBox query={query} setQuery={setQuery} />
      </div>

      {/* מסגרת 2 - מיון לפי מדינה */}
      <div className="filter-box location-box-wrapper">
        <FilterBox location={location} setLocation={setLocation} />
      </div>

      {/* מסגרת 3 - תאריכים */}
      <div className="filter-box date-box-wrapper">
        <DateBox
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div>

      {/* כפתור ללא מסגרת */}
      <button onClick={clearFilters} className="clear-filters-standalone">
        Clear all filters
      </button>
    </div>



      <div className="filter-info">
        {(query || location || startDate || endDate) && (
          <p>
            Active filters:
            {query && ` Band: "${query}"`}
            {location && ` Location: ${location}`}
            {startDate && ` From: ${startDate.toLocaleDateString()}`}
            {endDate && ` Until: ${endDate.toLocaleDateString()}`}
            {` | Found: ${filteredShows.length} shows`}
          </p>
        )}
      </div>

      <div className="shows-list">
        {filteredShows.length > 0 ? (
          filteredShows.map((show) => (
            <ShowCard key={show.showId} {...show} />
          ))
        ) : (
          <div className="no-shows">
            <p>No shows found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;