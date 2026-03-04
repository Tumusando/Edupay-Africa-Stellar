import React from "react";

const TransactionsTable = ({ transactions }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Hash</th>
          <th>Amount</th>
          <th>From</th>
          <th>To</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx, index) => (
          <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
            <td>{tx.hash.substring(0, 10)}...</td>
            <td>{tx.amount || "—"}</td>
            <td>{tx.from || "N/A"}</td>
            <td>{tx.to || "N/A"}</td>
            <td>{new Date(tx.date).toLocaleString()}</td>
            <td>{tx.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;