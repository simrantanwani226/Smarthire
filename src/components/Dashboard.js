// src/components/Dashboard.js
import React from 'react';

const Dashboard = ({ token }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard. This is a placeholder component.</p>
      <p>Your token: {token}</p>
    </div>
  );
};

export default Dashboard;
