import React, { useState } from "react";
import "../styles/SeatPicker.css";

const SeatPicker = ({ showData, onSelect }) => {
const [selectedSeats, setSelectedSeats] = useState([]);
const { rowsNum, seatsPerRow, reservedSeats } = showData;


  // בניית כל המושבים לפי rowsNum + seats_per_row
  const generateSeats = () => {
    const seats = [];
   for (let row = 1; row <= rowsNum; row++) {
  for (let col = 1; col <= seatsPerRow; col++) {
    const isReserved = reservedSeats.some(
      (s) => s.rowNum === row && s.chairNum === col
    );
    seats.push({
      id: `${row}-${col}`,
      row,
      col,
      reserved: isReserved,
    });
  }
}

    return seats;
  };

  const allSeats = generateSeats();
  console.log(allSeats)

  const handleClick = (seat) => {
    if (seat.reserved) return;

    const isSelected = selectedSeats.some(
      (s) => s.row === seat.row && s.col === seat.col
    );

    let updated;
    if (isSelected) {
      updated = selectedSeats.filter(
        (s) => !(s.row === seat.row && s.col === seat.col)
      );
    } else {
      updated = [...selectedSeats, seat];
    }

    setSelectedSeats(updated);
    onSelect(updated);
  };

  return (
    <div>
      <div className="legend">
        <span><span className="dot available" /> Available</span>
        <span><span className="dot reserved" /> Taken</span>
        <span><span className="dot selected" /> Selected</span>
      </div>

      <div className="stage">STAGE</div>

      <div className="seat-grid">
  {Array.from({ length: rowsNum }, (_, rowIndex) => {
    const row = rowIndex + 1;
    return (
      <div key={row} className="seat-row">
        <span className="row-label">{row}</span>
        {Array.from({ length: seatsPerRow }, (_, colIndex) => {
          const col = colIndex + 1;
          const isReserved = reservedSeats.some(
            (s) => s.rowNum === row && s.chairNum === col
          );
          const seat = {
            id: `${row}-${col}`,
            row,
            col,
            reserved: isReserved,
          };
          return (
            <div
              key={seat.id}
              className={`seat ${seat.reserved ? "reserved" : ""} ${
                selectedSeats.some(
                  (s) => s.row === seat.row && s.col === seat.col
                )
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleClick(seat)}
            >
              {col}
            </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeatPicker;
