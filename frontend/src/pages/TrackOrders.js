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
            <th>Show</th>
            <th>Name</th>
            <th>Family Name</th>
            <th>Date</th>
            <th>Number of Tickets</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {reservations.length > 0 ? (
            reservations.map(r => (
              <tr key={r.reservationId}>
                <td>{r.reservationId}</td>
                <td>{r.bandName}</td>
                <td>{r.privateName}</td>
                <td>{r.familyName}</td>
                <td>{new Date(r.resDate).toLocaleDateString()}</td>
                <td>{r.seatsCount}</td>
                <td>
                  <td>
                    {r.ticketPrice && r.seatsCount
                      ? `${r.ticketPrice * r.seatsCount} ILS`
                      : "-"}
                  </td>

                </td>
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
