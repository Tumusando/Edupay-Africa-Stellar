import React from "react";

const Input = ({ type = "text", placeholder, value, onChange }) => {
  const styles = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={styles}
    />
  );
};

export default Input;