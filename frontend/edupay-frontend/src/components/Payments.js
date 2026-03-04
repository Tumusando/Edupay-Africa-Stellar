import React, { useState } from "react";

const Payments = () => {
  const [fromSecret, setFromSecret] = useState("");
  const [toPublicKey, setToPublicKey] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePay = async () => {
    const res = await fetch("http://localhost:5000/api/stellar/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fromSecret, toPublicKey, amount }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Payments</h2>
      <input
        placeholder="From Secret"
        value={fromSecret}
        onChange={(e) => setFromSecret(e.target.value)}
      />
      <input
        placeholder="To Public Key"
        value={toPublicKey}
        onChange={(e) => setToPublicKey(e.target.value)}
      />
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePay}>Send</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Payments;