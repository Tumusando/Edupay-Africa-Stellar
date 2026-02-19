const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
require("dotenv").config(); // for .env

// Import validator + auth + service
const validatePayment = require("../validators/paymentValidator");
const auth = require("../middleware/auth");
const sendPayment = require("../services/sendPayment");

// POST /pay with auth
router.post("/pay", auth, validatePayment, async (req, res) => {
  try {
    const result = await sendPayment(req.body);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || "Payment failed"
    });
  }
});

// GET /pay/history with auth
router.get("/pay/history", auth, async (req, res) => {
  const filePath = path.join(__dirname, "../logs/transactions.json");
  let transactions = [];

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    transactions = JSON.parse(data);
  } catch (err) {
    transactions = [];
  }

  res.json({
    success: true,
    data: transactions
  });
});

module.exports = router;
