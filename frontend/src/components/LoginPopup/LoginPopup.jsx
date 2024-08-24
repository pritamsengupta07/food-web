import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  // The handleChange function is used to update formData state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = currState === 'Sign Up' 
      ? 'http://localhost:3000/api/auth/register' 
      : 'http://localhost:3000/api/auth/login';
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert(`${currState} successful!`);
        setShowLogin(false); // Close the popup on success
      } else {
        alert(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross} alt="" />
        </div>
        <div className='login-popup-input'>
          {currState === 'Login' ? null : (
            <input 
              type="text" 
              placeholder='Your name' 
              name='username' 
              value={formData.username}
              onChange={handleChange}  // Attach handleChange to onChange event
              required 
            />
          )}
          <input 
            type="email" 
            placeholder='Your email' 
            name='email' 
            value={formData.email}
            onChange={handleChange}  // Attach handleChange to onChange event
            required 
          />
          {currState === 'Login' ? null : (
            <input 
              type="phone" 
              placeholder='Your phone' 
              name='phone' 
              value={formData.phone}
              onChange={handleChange}  // Attach handleChange to onChange event
              required 
            />
          )}
          <input 
            type="password" 
            placeholder='Password' 
            name='password' 
            value={formData.password}
            onChange={handleChange}  // Attach handleChange to onChange event
            required 
          />
        </div>
        <button type="submit">
          {currState === 'Sign Up' ? 'Create account' : 'Login'}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing I agree to the terms of user and privacy policy </p>
        </div>
        {currState === 'Login' ? (
          <p>Create a new account <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
