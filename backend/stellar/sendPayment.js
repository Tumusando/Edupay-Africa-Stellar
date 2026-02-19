const { Server, Keypair, Networks, TransactionBuilder, Operation, Memo, Asset } = require('@stellar/stellar-sdk');
require('dotenv').config();

const server = new Server('https://horizon-testnet.stellar.org');
const networkPassphrase = Networks.TESTNET;

async function sendPayment({ payerSecret, receiver, amount, memo }) {
    try {
        const sourceKeypair = Keypair.fromSecret(payerSecret);
        const account = await server.loadAccount(sourceKeypair.publicKey());

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

        transaction.sign(sourceKeypair);
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
