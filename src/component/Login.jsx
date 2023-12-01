import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import avatar2 from '../data/avatar2.jpg';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = () => {
    if (email === 'mukesh@gmail.com' && password === 'Mukesh123') {
      onLogin();
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const imageStyle = {
    display: 'block',
    margin: '0 auto', // Center the image horizontally
    width: '370px',
    height: '370px',
  };

  return (
    <div>
      <div style={imageStyle}>
        <img
          src={avatar2} // Use the correct relative path to your image
          alt="Your Avatar"
          style={{ width: '100%' }} // Make the image responsive
        />
      </div>
      <div className="login-container">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'} // Toggle between text and password input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'} {/* Toggle text between Show and Hide */}
          </button>
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
