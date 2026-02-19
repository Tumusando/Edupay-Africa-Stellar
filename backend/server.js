// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/pay');
const logger = require('./utils/logger');

const app = express();
app.use(bodyParser.json());

// Basic logging for requests
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/pay', paymentRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('EduPay Africa Backend is running!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
});
