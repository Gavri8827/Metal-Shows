import React, { useState } from 'react';
import '../styles/AddNewHall.css';

export default function AddNewHall() {
  const [form, setForm] = useState({
    hallName: '',
    country: '',
    city: '',
    street: '',
    rowsNum: '',
    seatsPerRow: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || '' : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const totalSeats = (form.rowsNum || 0) * (form.seatsPerRow || 0);

    const hallData = {
      ...form,
      totalSeats
    };

    try {
      const res = await fetch('/api/halls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(hallData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to save hall');
      }

      setMessage('Hall added successfully!');
      setForm({
        hallName: '',
        country: '',
        city: '',
        street: '',
        rowsNum: '',
        seatsPerRow: ''
      });
    } catch (err) {
      console.error(err);
      setMessage('Error adding hall');
    }
  };

  const fields = [
    { label: 'Hall name', name: 'hallName', type: 'text' },
    { label: 'Country', name: 'country', type: 'select' },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'Street', name: 'street', type: 'text' },
    { label: 'Rows number', name: 'rowsNum', type: 'number' },
    { label: 'Seats per row', name: 'seatsPerRow', type: 'number' },
  ];

  return (
    <div className="add-hall-container">
      <h1>Add New Hall</h1>
      {message && <p className="message">{message}</p>}

      <form className="add-hall-form" onSubmit={handleSubmit}>
        {fields.map(({ label, name, type }) => (
          <div key={name}>
            <label htmlFor={name}>{label}:</label>

            {type === 'select' ? (
              <select
                id={name}
                name={name}
                value={form[name]}
                onChange={handleChange}
                required
              >
                <option value="">Select Country</option>
                <option value="Israel">Israel</option>
                <option value="USA">USA</option>
                <option value="Europe">Europe</option>
              </select>
            ) : (
              <input
                type={type}
                id={name}
                name={name}
                value={form[name]}
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}

        <button type="submit">Add Hall</button>
      </form>
    </div>
  );
}
