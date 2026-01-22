const StellarSdk = require('stellar-sdk');

function createWallet() {
  const pair = StellarSdk.Keypair.random();
  return {
    publicKey: pair.publicKey(),
    secret: pair.secret()
  };
}

module.exports = createWallet;
