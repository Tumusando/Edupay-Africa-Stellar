import express from "express";
const router = express.Router();

// Mock transactions
const mockTransactions = [
  {
    hash: "59c66b1e7001f50f9b7ea49a44238ca45ccf28c8713605f6dd65c9e1285b4ca9",
    date: "2026-02-21T10:56:03Z",
    status: "Success",
  },
  {
    hash: "7d5832a988210042724661338812ea2d7b8a6e8435d0788a4ca7f076ac2aada5",
    date: "2026-02-21T10:55:23Z",
    status: "Success",
  },
  {
    hash: "d5cfba488e2c3f4daaa0a979e5955cebf11e697d1950e4fe1403e52f8ddcdf45",
    date: "2026-02-21T10:10:40Z",
    status: "Success",
  },
];

// GET /api/stellar/history
router.get("/history", (req, res) => {
  res.json({
    success: true,
    payments: mockTransactions,
  });
});

// POST /api/stellar/pay
router.post("/pay", (req, res) => {
  const { fromSecret, toPublicKey, amount } = req.body;

  // Simulate a successful payment
  const newPayment = {
    hash: Math.random().toString(36).substring(2, 10),
    date: new Date().toISOString(),
    status: "Success",
    fromSecret,
    toPublicKey,
    amount,
  };

  mockTransactions.unshift(newPayment); // add to the top

  res.json({
    success: true,
    message: "Payment simulated successfully",
    data: newPayment,
  });
});

export default router;