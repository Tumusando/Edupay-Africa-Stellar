import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Welcome to EduPay Africa 🌍🎓
      </h1>

      <div className="card-container">

        <div className="card">
          <h2>Payments</h2>
          <p>Quickly pay for school fees across Africa.</p>
          <Link to="/payments">
            <button className="btn-green">Go to Payments</button>
          </Link>
        </div>

        <div className="card">
          <h2>Scholarships</h2>
          <p>Access scholarships and funding opportunities.</p>
          <Link to="/scholarships">
            <button className="btn-green">Go to Scholarships</button>
          </Link>
        </div>

        <div className="card">
          <h2>Dashboard</h2>
          <p>Track payments, scholarships, and balances easily.</p>
          <Link to="/dashboard">
            <button className="btn-green">Go to Dashboard</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;