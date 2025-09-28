import '../styles/HomePage.css';
import SearchBox from "../components/SearchBox";
import DateBox from "../components/DateBox";
import FilterBox from "../components/FilterBox";
import ShowCard from '../components/ShowCard';
import { useEffect, useState } from "react";

function HomePage () {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [applyDates, setApplyDates] = useState(false); // כפתור הפעלה

  useEffect(() => {
    fetch("http://localhost:8081/api/shows")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched shows from backend:", data); // 👈 כאן תבדקי את שמות השדות
        setShows(data);
        setFilteredShows(data);
      })
      .catch(err => console.error("Error fetching shows:", err));
  }, []);

  useEffect(() => {
    let results = shows;

    // חיפוש לפי שם להקה
    if (query) {
      results = results.filter(show =>
        show.bandName?.toLowerCase().includes(query.toLowerCase())
      );
    }

    // סינון לפי מדינה (country)
    if (location) {
      results = results.filter(show =>
        show.hall?.country === location
      );
    }

    // סינון לפי טווח תאריכים (פועל רק אחרי כפתור)
    if (applyDates && (startDate || endDate)) {
      results = results.filter(show => {
        const showDate = new Date(show.date);
        if (startDate && showDate < startDate) return false;
        if (endDate && showDate > endDate) return false;
        return true;
      });
    }

    setFilteredShows(results);
  }, [query, location, startDate, endDate, applyDates, shows]);

  return (
    <div className="HomePageContainer">
      <h2>Welcome to the Home Page</h2>

      <div className="filter-bar">
        <SearchBox query={query} setQuery={setQuery} />
        <FilterBox location={location} setLocation={setLocation} />
        <DateBox
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          onApply={() => setApplyDates(!applyDates)}
        />
      </div>

      <div className="shows-list">
        {filteredShows.length > 0 ? (
          filteredShows.map((show) => (
            <ShowCard key={show.showId} {...show} />
          ))
        ) : (
          <p>No shows available</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
