const StellarSdk = require("stellar-sdk");

const server = new StellarSdk.Server(
  "https://horizon-testnet.stellar.org"
);

async function sendPayment(senderSecret, receiverPublic, amount) {
  const sourceKeypair = StellarSdk.Keypair.fromSecret(senderSecret);
  const sourceAccount = await server.loadAccount(
    sourceKeypair.publicKey()
  );

  const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
    fee: StellarSdk.BASE_FEE,
    networkPassphrase: StellarSdk.Networks.TESTNET,
  })
    .addOperation(
      StellarSdk.Operation.payment({
        destination: receiverPublic,
        asset: StellarSdk.Asset.native(),
        amount: amount,
      })
    )
    .setTimeout(30)
    .build();

  transaction.sign(sourceKeypair);
  return await server.submitTransaction(transaction);
}

module.exports = sendPayment;
