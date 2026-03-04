import React from "react";

const StatsCard = ({ title, value }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      width: "200px",
      margin: "10px",
      textAlign: "center",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
    }}>
      <h3>{title}</h3>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{value}</p>
    </div>
  );
};

export default StatsCard;