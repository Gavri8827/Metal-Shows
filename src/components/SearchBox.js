import { useState } from "react";
import '../styles/SearchBox.css'

const SearchBox = ({ data }) => {
    const [query, setQuery] = useState(""); 
    // שלב 3 – סינון הנתונים לפי שאילתת החיפוש
    const [filteredData,setFilteredData] = useState([]);
    const handleSearch =()=>{
        const results=data.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(results);
    };
      
  
  
    return (
      <div>
        <input
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="search-button" onClick={handleSearch}> search </button>

        {/* שלב 5 – הצגת התוצאות המסוננות */}
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SearchBox;