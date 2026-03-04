import React from "react";

const Login = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h1>Login</h1>

      <input style={inputStyle} placeholder="Email" />
      <input style={inputStyle} placeholder="Password" type="password" />

      <button style={buttonStyle}>Login</button>

      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        Authentication will be enabled in a future phase.
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

export default Login;