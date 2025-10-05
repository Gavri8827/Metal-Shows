import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/DateBox.css";

const DateBox = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="date-box">
      {/* תאריך התחלה */}
      <div className="date-field">
        <label>From: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Select start date"
          dateFormat="yyyy-MM-dd"
          popperPlacement="bottom-start"
          popperClassName="datebox-popper-top"
          shouldCloseOnSelect
        />
      </div>

      {/* תאריך סיום */}
      <div className="date-field">
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
          popperPlacement="top-start"
          popperClassName="datebox-popper-top"
          shouldCloseOnSelect

        />
      </div>
    </div>
  );
};

export default DateBox;