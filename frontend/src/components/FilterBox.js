import React from "react";

const FilterBox = ({ location, setLocation }) => {
  return (
    <div>
      <label>Location: </label>
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">All</option>
        <option value="Europe">Europe</option>
        <option value="USA">USA</option>
        <option value="Israel">Israel</option>
      </select>
    </div>
  );
};

export default FilterBox;
