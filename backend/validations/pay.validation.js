// backend/validators/paymentValidator.js
function validatePayment(req, res, next) {
  const { amount, receiver } = req.body;
  if (!amount || typeof amount !== 'number') {
    return res.status(400).json({ success: false, error: 'Invalid or missing amount' });
  }
  if (!receiver || typeof receiver !== 'string') {
    return res.status(400).json({ success: false, error: 'Invalid or missing receiver' });
  }
  next();
}

module.exports = { validatePayment };
