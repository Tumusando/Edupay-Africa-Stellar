import React from "react";

const Button = ({ children, onClick, type = "button", styleType = "primary" }) => {
  const styles = {
    primary: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    secondary: {
      padding: "10px 20px",
      backgroundColor: "#ccc",
      color: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <button type={type} onClick={onClick} style={styles[styleType]}>
      {children}
    </button>
  );
};

export default Button;