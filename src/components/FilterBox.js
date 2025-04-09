import { useState } from "react";

const FilterBox = ({ data }) => {
  const [selectedField, setSelectedField] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (e) => {
    const value = e.target.value;
    setSelectedField(value);

    if (value === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.field === value);
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <label>Location:</label>
      <select value={selectedField} onChange={handleFilter}>
        <option value="">Select</option>
        <option value="Europe">Europe</option>
        <option value="USA">USA</option>
        <option value="Israel">Israel</option>
      </select>

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.field}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBox;
