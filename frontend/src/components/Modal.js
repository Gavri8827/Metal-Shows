// components/Modal.js
import React from "react";
import "../styles/Modal.css";

export default function Modal({ message, onClose }) {
  if (!message) return null; // לא מציג אם אין הודעה

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{message}</h2>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
