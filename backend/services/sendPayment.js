const fs = require("fs");
const path = require("path");

module.exports = async function sendPayment({ amount, receiver }) {
  const tx = {
    txHash: "FAKE_TX_" + Date.now(),
    amount,
    receiver,
    timestamp: new Date().toISOString()
  };

  const filePath = path.join(__dirname, "../logs/transactions.json");

  // Read existing transactions
  let transactions = [];
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    transactions = JSON.parse(data);
  } catch (err) {
    transactions = [];
  }

  // Add new transaction
  transactions.push(tx);

  // Write back to file
  fs.writeFileSync(filePath, JSON.stringify(transactions, null, 2));

  return tx;
};
