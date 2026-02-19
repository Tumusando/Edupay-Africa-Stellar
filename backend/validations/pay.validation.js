module.exports = function validatePayment(req, res, next) {
  const { amount, receiver } = req.body;

  // 1️⃣ Check missing fields
  if (amount === undefined || receiver === undefined) {
    return res.status(400).json({
      success: false,
      error: "Amount and receiver are required"
    });
  }

  // 2️⃣ Validate amount
  if (typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({
      success: false,
      error: "Amount must be a positive number"
    });
  }

  // 3️⃣ Validate receiver
  if (
    typeof receiver !== "string" ||
    !receiver.startsWith("G") ||
    receiver.length < 50
  ) {
    return res.status(400).json({
      success: false,
      error: "Invalid receiver address"
    });
  }

  // ✅ All good
  next();
};
