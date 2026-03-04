import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/stellar/history")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data.payments || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading transactions...</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Hash</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.hash}>
                <td>{tx.hash}</td>
                <td>{new Date(tx.date).toLocaleString()}</td>
                <td>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;