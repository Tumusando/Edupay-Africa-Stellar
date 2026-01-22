const StellarSdk = require("stellar-sdk");

function createWallet() {
  const keypair = StellarSdk.Keypair.random();
  return {
    publicKey: keypair.publicKey(),
    secret: keypair.secret(),
  };
}

module.exports = createWallet;
