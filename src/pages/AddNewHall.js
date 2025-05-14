import React, { useState } from 'react';
import '../styles/AddNewHall.css';

export default function AddNewHall() {
  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    state: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: swap in your real backend endpoint
    fetch('/api/halls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(() => {
        setMessage('Hall added successfully!');
        setForm({ name: '', address: '', city: '', state: '' });
      })
      .catch(err => {
        console.error(err);
        setMessage('Error adding hall');
      });
  };

  return (
    <div className="add-hall-container">
      <h1>Add New Hall</h1>
      {message && <p className="message">{message}</p>}
      <form className="add-hall-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Hall name:</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          id="city"
          name="city"
          value={form.city}
          onChange={handleChange}
          required
        />

        <label htmlFor="state">State:</label>
        <input
          id="state"
          name="state"
          value={form.state}
          onChange={handleChange}
          required
        />

        <button type="submit">add hall</button>
      </form>
    </div>
  );
}
