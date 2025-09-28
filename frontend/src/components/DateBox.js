import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateBox = ({ startDate, endDate, setStartDate, setEndDate, onApply }) => {
  return (
    <div className="date-box">
      <div>
        <label>From: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Select start date"
          dateFormat="yyyy-MM-dd"
        />
      </div>

      <div>
        <label>Until: </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Select end date"
          dateFormat="yyyy-MM-dd"
        />
      </div>

      <button className="apply-dates" onClick={onApply}>
        Apply Dates
      </button>
    </div>
  );
};

export default DateBox;
