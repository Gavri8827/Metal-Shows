import React, { useState, useEffect } from 'react';
import '../styles/AddNewShow.css';
import Modal from '../components/Modal';
import SingleDateBox from  "../components/SingleDateBox";


export default function AddNewShow() {
  const [form, setForm] = useState({
    showDate: '',
    hallId: '',
    ticketPrice: '',
    bandName: '',
    picture: ''
  });

  const [message, setMessage] = useState('');
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    fetch('/api/halls')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched halls:", data);
        setHalls(data);
      })
      .catch(err => console.error('Failed to fetch halls:', err));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log("Changed:", name, value);
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formattedDate = form.showDate 
  ? form.showDate.toISOString().split("T")[0] 
  : null;


    const showData = {
      ...form,
      showDate: formattedDate,
      hallId: form.hallId === "" ? null : parseInt(form.hallId),
      ticketPrice: form.ticketPrice === "" ? null : parseInt(form.ticketPrice)
    };

    console.log("Submitting:", showData);

    try {
      const res = await fetch('/api/shows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(showData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to save show');
      }

      setMessage('Show added successfully!');
      setForm({
        showDate: '',
        hallId: '',
        ticketPrice: '',
        bandName: '',
        picture: ''
      });
    } catch (err) {
      console.error(err);
      setMessage('Error adding show');
    }
  };

  const fields = [
  
    { label: 'Hall', name: 'hallId', type: 'select', options: halls },
    { label: 'Ticket Price (₪)', name: 'ticketPrice', type: 'number' },
    { label: 'Band Name', name: 'bandName', type: 'text' },
    { label: 'Picture URL', name: 'picture', type: 'text' }
  ];

  return (
    <div className="add-show-container">
      <h1>Add New Show</h1>
      <form className="add-show-form" onSubmit={handleSubmit}>
  {/* Show Date - תיבת בחירת תאריך מיוחדת */}
  <SingleDateBox
    selectedDate={form.showDate}
    setSelectedDate={(date) => setForm(prev => ({ ...prev, showDate: date }))}
    label="Show Date"
  />

  {/* שאר השדות */}
  {fields.map(({ label, name, type, options }) => (
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
        <option value="">Select</option>
        {options.map(option => (
          <option key={option.hallId} value={option.hallId}>
            {option.hallName} ({option.city})
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={form[name]}
        onChange={handleChange}
        required
        {...(type === "number" ? { min: 0, onKeyDown: (e) => e.key === '-' && e.preventDefault() } : {})}
      />
    )}
  </div>
))}

        <button type="submit">Add Show</button>
        <Modal message={message} onClose={() => setMessage('')} />
      </form>
    </div>
  );
}
