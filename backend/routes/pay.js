// backend/routes/pay.js
const express = require('express');
const router = express.Router();
const { validatePayment } = require('../validators/paymentValidator');
const logger = require('../utils/logger');

// Temporary in-memory storage for transactions
const transactions = [];

// POST /pay
router.post('/', validatePayment, (req, res) => {
  const { amount, receiver } = req.body;
  const txHash = `FAKE_TX_${Date.now()}`;
  const timestamp = new Date().toISOString();

  const payment = { txHash, amount, receiver, timestamp };
  transactions.push(payment);

  logger.info(`Payment created: ${JSON.stringify(payment)}`);

  res.status(200).json({ success: true, data: payment });
});

// GET /pay/history
router.get('/history', (req, res) => {
  res.status(200).json({ success: true, data: transactions });
});

module.exports = router;
