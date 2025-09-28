import React from "react";
import '../styles/SearchBox.css'

const SearchBox = ({ query, setQuery }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter band's name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
