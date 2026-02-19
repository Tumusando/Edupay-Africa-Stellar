// services/stellarService.js
const { Server, Keypair, Networks, TransactionBuilder, Operation, Memo, Asset } = require('@stellar/stellar-sdk');
require('dotenv').config();

const server = new Server('https://horizon-testnet.stellar.org');
const networkPassphrase = Networks.TESTNET;

async function sendPayment({ receiver, amount, memo }) {
    try {
        const payerSecret = process.env.PAYER_SECRET;
        const sourceKeypair = Keypair.fromSecret(payerSecret);

        // Load source account
        const account = await server.loadAccount(sourceKeypair.publicKey());

        // Build transaction
        const transaction = new TransactionBuilder(account, {
            fee: await server.fetchBaseFee(),
            networkPassphrase
        })
        .addOperation(Operation.payment({
            destination: receiver,
            asset: Asset.native(),
            amount: amount.toString()
        }))
        .addMemo(Memo.text(memo || ''))
        .setTimeout(180)
        .build();

        // Sign transaction
        transaction.sign(sourceKeypair);

        // Submit transaction
        const txResult = await server.submitTransaction(transaction);

        return {
            success: true,
            transactionId: txResult.id,
            ledger: txResult.ledger,
            timestamp: txResult.created_at
        };

    } catch (error) {
        return { success: false, message: error.toString() };
    }
}

module.exports = { sendPayment };
