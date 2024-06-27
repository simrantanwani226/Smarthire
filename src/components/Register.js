// src/components/Register.js
import React from 'react';
import '../styles.css';

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Welcome</h1>
        <p>Enter your details to create your account</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="form-button">REGISTER</button>
        <div className="sign-up">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
      <div className="form-image">
        <div>
          <h2>Join our platform for infinite learning opportunities</h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
