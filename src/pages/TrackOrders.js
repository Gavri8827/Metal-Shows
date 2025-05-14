import React, { useState, useEffect } from 'react';
import '../styles/TrackOrders.css';

export default function TrackOrders() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // TODO: replace URL with your real backend endpoint
    fetch('/api/reservations')
      .then(res => res.json())
      .then(data => setReservations(data))
      .catch(err => {
        console.error('Failed to load reservations', err);
      });
  }, []);

  return (
    <div className="track-orders-container">
      <h1>Recent reservations:</h1>

      <table className="reservations-table">
        <thead>
          <tr>
            <th>Reservation id</th>
            <th>Name</th>
            <th>Family Name</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {reservations.length > 0 ? (
            reservations.map(r => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.firstName}</td>
                <td>{r.lastName}</td>
                <td>{new Date(r.date).toLocaleDateString()}</td>
                <td>{r.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">
                No reservations found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
