// src/components/Login.js
import React from 'react';
import '../styles.css';

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Welcome back</h1>
        <p>Enter the information you entered while registering</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="remember-me">
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <button className="form-button">LOGIN</button>
        <div className="sign-up">
          Don't have an account? <a href="/register">Sign up for free</a>
        </div>
      </div>
      <div className="form-image">
        <div>
          <h2>Digital platform for infinity learning</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
