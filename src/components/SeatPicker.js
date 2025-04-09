import React, { useState } from 'react';
import '../styles/SeatPicker.css';

const SeatPicker = ({ seats, onSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleClick = (seat) => {
    if (seat.reserved) return;

    const isSelected = selectedSeats.includes(seat.id);
    const updated = isSelected
      ? selectedSeats.filter((id) => id !== seat.id)
      : [...selectedSeats, seat.id];

    setSelectedSeats(updated);
    onSelect(updated);
  };

  return (
    <div className="seat-grid">
      {seats.map((seat) => (
        <div
          key={seat.id}
          className={`seat ${seat.reserved ? 'reserved' : ''} ${
            selectedSeats.includes(seat.id) ? 'selected' : ''
          }`}
          onClick={() => handleClick(seat)}
        >
          {seat.label}
        </div>
      ))}
    </div>
  );
};

export default SeatPicker;
