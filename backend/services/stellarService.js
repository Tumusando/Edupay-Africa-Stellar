// services/stellarService.js
async function sendPayment({ payerSecret, receiver, amount, memo }) {
  // mock payment (nta Stellar)
  if (!receiver || !amount) {
    throw new Error("Missing receiver or amount");
  }

  return {
    txHash: "FAKE_TX_" + Date.now(),
    receiver,
    amount,
    memo,
    status: "SUCCESS (mock)",
  };
}

module.exports = { sendPayment };
