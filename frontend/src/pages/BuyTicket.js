import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SeatPicker from '../components/SeatPicker';
import '../styles/BuyTicket.css';
import axios from '../axios';

const BuyTicket = () => {
  const { showId } = useParams();   // 👈 נקלט מה־URL
  const [showData, setShowData] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [formData, setFormData] = useState({ privateName: '', familyName: '', mail: '' });

  // שליפת מופע + מושבים מהבאק
  useEffect(() => {
    axios.get(`/shows/${showId}/seats`)
      .then(res => setShowData(res.data))
      .catch(err => console.error(err));
  }, [showId]);

  const handleTicketPurchase = (e) => {
  e.preventDefault();

  const reservation = {
    privateName: formData.privateName,
    familyName: formData.familyName,
    mail: formData.mail,
    resDate: new Date().toISOString().split("T")[0],
    showId: showId,
    seats: selectedSeats.map(seat => ({
      rowNum: seat.row,
      chairNum: seat.col
    }))
  };

  axios.post("/reservations", reservation)
    .then(() => alert("Reservation successful!"))
    .catch(err => alert("Error: " + err.message));
};


  if (!showData) return <p>Loading...</p>;

  return (
    <div className="buy-ticket-container">
      <h1>Buy Ticket</h1>

      <div className="header-bar">
        <div className="show-info">
          <button>Band: {showData.bandName}</button>
          <button>Date: {showData.showDate}</button>
          <button>Location: {showData.country},{showData.city}, {showData.street}</button>
        </div>
        <img src={showData.picture} alt="band" className="band-img" />
      </div>

      <div className="main-section">
        <div className="seats-section">
          <p>
            <strong>Selected seats:</strong>{" "}
            {selectedSeats.map(s => `row: ${s.row}, seat: ${s.col}`).join(" | ")}
          </p>



          <div className="stage">STAGE</div>
          <SeatPicker showData={showData} onSelect={setSelectedSeats} />
        </div>

        <div className="form-section">
          <form onSubmit={handleTicketPurchase}>
            <label>First name:</label>
            <input value={formData.privateName} onChange={(e) => setFormData({ ...formData, privateName: e.target.value })} />

            <label>Last name:</label>
            <input value={formData.familyName} onChange={(e) => setFormData({ ...formData, familyName: e.target.value })} />

            <label>Email:</label>
            <input value={formData.mail} onChange={(e) => setFormData({ ...formData, mail: e.target.value })} />

            <label>Number of seats:</label>
            <input value={selectedSeats.length} disabled />

            <label>Price:</label>
            <input value={selectedSeats.length * showData.ticketPrice} disabled />

            <button type="submit">Buy</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;

