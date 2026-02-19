const express = require("express");
const app = express();
require("dotenv").config(); // 🔹 load .env

// Middleware
app.use(express.json());

// Routes
const payRoute = require("./routes/pay");
app.use("/", payRoute); // URL: /pay + /pay/history

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
