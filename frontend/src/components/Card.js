import React from "react";

const Card = ({ title, children }) => {
  const styles = {
    container: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      maxWidth: "300px",
    },
    title: {
      marginBottom: "15px",
      fontSize: "18px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      {title && <h3 style={styles.title}>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;