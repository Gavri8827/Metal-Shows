// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar({ isAuth,onLogout }) {
  const navigate = useNavigate();

  // Logout handler: clear auth flag and redirect to home
  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    onLogout();  
    navigate('/', { replace: true });
  };

  return (
    <header>
      <nav className="navbar">
        {/* Always-visible link */}
        <Link to="/">Home Page</Link>

        {!isAuth ? (
          /* Shown only when NOT authenticated */
          <Link to="/adminLogin">Admin Login</Link>
        ) : (
          <>
            {/* Admin-only links */}
            <Link to="/trackOrders">Track Orders</Link>
            <Link to="/addHall">Add New Hall</Link>
            <Link to="/addShow">Add New Show</Link>

            {/* Logout button for admins */}
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
