import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminLogin.css';

export default function AdminLogin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = e => {
      e.preventDefault();
      // Admin Credentials
      const VALID_USER = 'Admin';
      const VALID_PASS = '1234';
  
      if (username === VALID_USER && password === VALID_PASS) {
        localStorage.setItem('authenticated', 'true');
        onLogin();
        navigate('/trackOrders'); 
      } else {
        setError('Wrong credentials');
      }
    };
  
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Admin Login</h2>
          {error && <div className="error">{error}</div>}
  
          <label htmlFor="user">User Name</label>
          <input
            id="user"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
  
          <label htmlFor="pass">Password</label>
          <input
            id="pass"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
  
          <button type="submit">Login</button>
        </form>
      </div>
  );
  }