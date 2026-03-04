import React, { useEffect, useState } from "react";
import { getPaymentHistory } from "../services/paymentService";

const Dashboard = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const loadPayments = async () => {
      const data = await getPaymentHistory();
      if (data.success) {
        setPayments(data.payments);
      }
    };
    loadPayments();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>
      <h3>Recent Payments</h3>

      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={th}>From</th>
              <th style={th}>To</th>
              <th style={th}>Amount</th>
              <th style={th}>Date</th>
              <th style={th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td style={td}>{p.from}</td>
                <td style={td}>{p.to}</td>
                <td style={td}>{p.amount}</td>
                <td style={td}>{p.date}</td>
                <td style={td}>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const th = { border: "1px solid #ccc", padding: "8px", background: "#f5f5f5" };
const td = { border: "1px solid #ccc", padding: "8px" };

export default Dashboard;