const StellarSdk = require("stellar-sdk");

function createWallet() {
  const pair = StellarSdk.Keypair.random();
  return {
    publicKey: pair.publicKey(),
    secret: pair.secret(),
  };
}

const wallet = createWallet();
console.log("Public Key:", wallet.publicKey);
console.log("Secret Key:", wallet.secret);

