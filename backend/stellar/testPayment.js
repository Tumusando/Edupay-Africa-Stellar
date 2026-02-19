const sendPayment = require('./sendPayment');

sendPayment({
  sourceSecret: process.env.SOURCE_SECRET,
  destination: process.env.DESTINATION_PUBLIC,
  amount: 2,
})
  .then((res) => {
    console.log('✅ Payment OK');
    console.log(res.hash);
  })
  .catch(console.error);
