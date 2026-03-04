import React from "react";

const Signup = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h1>Signup</h1>

      <input style={inputStyle} placeholder="Full Name" />
      <input style={inputStyle} placeholder="Email" />
      <input style={inputStyle} placeholder="Password" type="password" />

      <button style={buttonStyle}>Create Account</button>

      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        Account creation will be enabled in Phase 2.
      </p>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
};

export default Signup;