import React, { useState, useEffect } from 'react';
import SeatPicker from '../components/SeatPicker';
import '../styles/BuyTicket.css';
import axios from '../axios';

const BuyTicket = () => {
  const show = {
    band: 'Metallica',
    date: '2025-07-20',
    location: 'Tel Aviv',
    hall: 'Hall A',
    image: 'http://www.gilposters.co.il/products/GB-LP1329.jpg',
  };

  const [seats, setSeats] = useState(
    Array.from({ length: 10 * 10 }, (_, i) => {
      const row = Math.floor(i / 10) + 1;
      const col = (i % 10) + 1;
      return {
        id: `${row}-${col}`,
        row,
        col,
        reserved: Math.random() < 0.2,
      };
    })
  );

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  /*פונקציה שמופעלת אחרי כפתור קניית כרטיס שתבצע:
  עדכון טבלת מושבים תפוסים באולם לאחר רכישת כרטיסים+עדכון טבלת הזמנות חדשות*/
  const handleTicketPurchase =() =>{};

  
  return (
    <div className="buy-ticket-container">
      <h1>Buy Ticket</h1>

      <div className="header-bar">
        <div className="show-info">
          <button>Band: {show.band}</button>
          <button>Date: {show.date}</button>
          <button>Location: {show.location}</button>
        </div>
        <img src={show.image} alt="band" className="band-img" />
      </div>

      <div className="main-section">
        <div className="seats-section">
          <p><strong>Selected seats:</strong></p>

          <div className="legend">
            <span><span className="dot available" /> Available</span>
            <span><span className="dot reserved" /> Taken</span>
            <span><span className="dot selected" /> Selected</span>
          </div>

          <div className="stage">STAGE</div>
          <SeatPicker seats={seats} onSelect={setSelectedSeats} />
        </div>

        <div className="form-section">
          <p><strong>Selected tickets:</strong></p>
          <form>
            <label>Name:</label>
            <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

            <label>Email:</label>
            <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

            <label>Number of seats:</label>
            <input value={selectedSeats.length} disabled />

            <label>Price:</label>
            <input value={selectedSeats.length * 50} disabled />

            <button type="submit" onClick={handleTicketPurchase}>buy</button>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;