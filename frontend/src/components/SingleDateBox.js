import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/SingleDateBox.css";

const SingleDateBox= ({ selectedDate, setSelectedDate, label }) => {
  return (
    <div className="single-date-box">
      <label>{label}: </label>
      <DatePicker
        selected={selectedDate}
        onChange={setSelectedDate}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select date"
        popperPlacement="bottom-start"
        shouldCloseOnSelect={true}
      />
    </div>
  );
};

export default SingleDateBox;
