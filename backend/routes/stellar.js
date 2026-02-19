const express = require('express');
const router = express.Router();

const StellarSdk = require('@stellar/stellar-sdk');
require('dotenv').config();

const {
  Keypair,
  TransactionBuilder,
  BASE_FEE,
  Networks,
  Operation,
  Asset,
} = StellarSdk;

const server = new StellarSdk.Horizon.Server(process.env.HORIZON_URL);

router.post('/send', async (req, res) => {
  try {
    const sourceKeypair = Keypair.fromSecret(process.env.SOURCE_SECRET);
    const account = await server.loadAccount(sourceKeypair.publicKey());

    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(
        Operation.payment({
          destination: process.env.DESTINATION_PUBLIC,
          asset: Asset.native(),
          amount: "1",
        })
      )
      .setTimeout(30)
      .build();

    transaction.sign(sourceKeypair);

    const result = await server.submitTransaction(transaction);

    res.json({
      success: true,
      hash: result.hash,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
