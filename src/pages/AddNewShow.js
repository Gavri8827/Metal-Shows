import React, { useState } from 'react';
import '../styles/AddNewShow.css';

export default function AddNewShow() {
  const [form, setForm] = useState({
    band: '',
    date: '',
    location: '',
    photoUrl: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: replace with your real backend endpoint
    fetch('/api/shows', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(() => {
        setMessage('Show added successfully!');
        setForm({ band: '', date: '', location: '', photoUrl: '' });
      })
      .catch(err => {
        console.error(err);
        setMessage('Error adding show');
      });
  };

  return (
    <div className="add-show-container">
      <h1>Add New Show</h1>
      {message && <p className="message">{message}</p>}
      <form className="add-show-form" onSubmit={handleSubmit}>
        <label htmlFor="band">Band:</label>
        <input
          id="band"
          name="band"
          value={form.band}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          id="location"
          name="location"
          value={form.location}
          onChange={handleChange}
          required
        />

        <label htmlFor="photoUrl">Band photo URL:</label>
        <input
          id="photoUrl"
          name="photoUrl"
          value={form.photoUrl}
          onChange={handleChange}
          placeholder="https://…"
        />

        <button type="submit">add show</button>
      </form>
    </div>
  );
}
