import React from "react";

const Profile = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Profile</h1>
      <p>
        This profile will represent students, institutions, or administrators
        interacting with EduPay Africa.
      </p>

      <div style={boxStyle}>
        <h3>👤 Profile Features (Planned)</h3>
        <ul>
          <li>User role (Student / Institution / Admin)</li>
          <li>Linked Stellar wallet</li>
          <li>Transaction history</li>
          <li>Education level & institution</li>
        </ul>
      </div>
    </div>
  );
};

const boxStyle = {
  marginTop: "30px",
  padding: "20px",
  border: "1px dashed #999",
  borderRadius: "8px",
  backgroundColor: "#fafafa",
};

export default Profile;