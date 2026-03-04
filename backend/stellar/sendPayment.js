// backend/stellar/sendPayment.js
import StellarSdk from '@stellar/stellar-sdk';

const { Horizon, Keypair, TransactionBuilder, Networks, Operation, Asset } = StellarSdk;

// Horizon server (TESTNET)
const server = new Horizon.Server('https://horizon-testnet.stellar.org');

export async function sendPayment(fromSecret, toPublicKey, amount) {
  const sourceKeypair = Keypair.fromSecret(fromSecret);

  const account = await server.loadAccount(sourceKeypair.publicKey());

  const transaction = new TransactionBuilder(account, {
    fee: await server.fetchBaseFee(),
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.payment({
        destination: toPublicKey,
        asset: Asset.native(),
        amount: amount,
      })
    )
    .setTimeout(30)
    .build();

  transaction.sign(sourceKeypair);

  const result = await server.submitTransaction(transaction);
  return result;
}