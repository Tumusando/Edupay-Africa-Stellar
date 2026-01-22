const express = require("express");
const createWallet = require("./stellar/createWallet");
const sendPayment = require("./stellar/sendPayment");

const app = express();
app.use(express.json());

app.get("/wallet/create", (req, res) => {
  const wallet = createWallet();
  res.json(wallet);
});

app.post("/payment/send", async (req, res) => {
  const { senderSecret, receiverPublic, amount } = req.body;
  try {
    const result = await sendPayment(
      senderSecret,
      receiverPublic,
      amount
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("EduPay Africa backend running on port 3000");
});
