import React from "react";
import "./App.css";

function App() {
  return (
    <div className="home">
      <nav className="navbar">
        <h2>EduPay Africa</h2>
        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Payments</li>
          <li>Profile</li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to EduPay Africa</h1>
          <p>
            Empowering education across Africa through secure Stellar blockchain
            payments.
          </p>
          <button>Get Started</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="Education Africa"
          />
        </div>
      </section>
    </div>
  );
}

export default App;