import React from "react";

const Payments = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Payments</h1>
      <p>
        This section will handle tuition payments, scholarships, and
        institutional transfers using the Stellar network.
      </p>

      <div style={boxStyle}>
        <h3>🚧 Coming Soon</h3>
        <p>
          Payment execution, institution wallets, and smart contract logic
          will be enabled in Phase 2.
        </p>
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

export default Payments;