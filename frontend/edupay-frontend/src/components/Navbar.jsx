import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      padding: "10px 20px",
      borderBottom: "1px solid #ccc",
      marginBottom: "20px",
      backgroundColor: "#f8f8f8",
      fontWeight: "bold"
    }}>
      <Link to="/" style={{ textDecoration: "none", color: "#0077cc" }}>Home</Link>
      <Link to="/dashboard" style={{ textDecoration: "none", color: "#0077cc" }}>Dashboard</Link>
      <Link to="/education" style={{ textDecoration: "none", color: "#0077cc" }}>Education</Link>
      <Link to="/payments" style={{ textDecoration: "none", color: "#0077cc" }}>Payments</Link>
      <Link to="/profile" style={{ textDecoration: "none", color: "#0077cc" }}>Profile</Link>
      <Link to="/login" style={{ textDecoration: "none", color: "#0077cc" }}>Login</Link>
      <Link to="/signup" style={{ textDecoration: "none", color: "#0077cc" }}>Signup</Link>
    </nav>
  );
};

export default Navbar;