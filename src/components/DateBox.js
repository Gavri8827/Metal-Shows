import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateBox = ({ data }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.date);
      if (startDate && itemDate < startDate) return false;
      if (endDate && itemDate > endDate) return false;
      return true;
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <label> from: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="select start date"
          dateFormat="yyyy-MM-dd"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label> until: </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="select end date"
          dateFormat="yyyy-MM-dd"
        />
      </div>

      <button onClick={handleSearch}>search</button>

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} – {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DateBox;
