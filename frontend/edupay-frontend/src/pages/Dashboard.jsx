import React from "react";

// Sample transaction data (replace with API data later)
const transactions = [
  {
    hash: "59c66b1e7001f50f9b7ea49a44238ca45ccf28c8713605f6dd65c9e1285b4ca9",
    amount: "—",
    from: "N/A",
    to: "N/A",
    date: "2/21/2026, 2:56:03 AM",
    status: "Success"
  },
  {
    hash: "7d5832a988210042724661338812ea2d7b8a6e8435d0788a4ca7f076ac2aada5",
    amount: "—",
    from: "N/A",
    to: "N/A",
    date: "2/21/2026, 2:55:23 AM",
    status: "Success"
  },
  {
    hash: "d5cfba488e2c3f4daaa0a979e5955cebf11e697d1950e4fe1403e52f8ddcdf45",
    amount: "—",
    from: "N/A",
    to: "N/A",
    date: "2/21/2026, 2:10:40 AM",
    status: "Success"
  }
];

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>EduPay Africa Dashboard</h1>

      {/* Stats Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "20px",
        marginBottom: "40px"
      }}>
        <div style={cardStyle}>
          <h3>Total Transactions</h3>
          <p>{transactions.length}</p>
        </div>
        <div style={cardStyle}>
          <h3>Last Transaction Amount</h3>
          <p>N/A</p>
        </div>
        <div style={cardStyle}>
          <h3>Network Status</h3>
          <p>Stellar Testnet ✅</p>
        </div>
        <div style={cardStyle}>
          <h3>Wallet Mode</h3>
          <p>Read-only</p>
        </div>
      </div>

      {/* Transaction Table */}
      <h2>Recent Transactions</h2>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>Hash</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>From</th>
              <th style={thStyle}>To</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} style={{ textAlign: "center", borderBottom: "1px solid #ccc" }}>
                <td style={tdStyle}>{tx.hash.substring(0, 12)}...</td>
                <td style={tdStyle}>{tx.amount}</td>
                <td style={tdStyle}>{tx.from}</td>
                <td style={tdStyle}>{tx.to}</td>
                <td style={tdStyle}>{tx.date}</td>
                <td style={tdStyle}>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: "20px" }}>
        EduPay Africa is connected to the Stellar Testnet. All displayed transactions are verifiable on-chain.
      </p>
    </div>
  );
};

// Styles
const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  backgroundColor: "#f9f9f9",
  fontWeight: "bold"
};

const thStyle = {
  padding: "10px",
  borderBottom: "2px solid #ccc",
  textAlign: "center",
  backgroundColor: "#f1f1f1"
};

const tdStyle = {
  padding: "10px"
};

export default Dashboard;