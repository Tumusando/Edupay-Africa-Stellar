import StellarSdk from "@stellar/stellar-sdk";

const server = new StellarSdk.Horizon.Server(
  "https://horizon-testnet.stellar.org"
);

// account yawe nyamukuru (receiver / sender)
const ACCOUNT_PUBLIC_KEY =
  "GDQOEX4A3K7OTYW66PJ4FE3QEAQPDM6SP24LUNN5XQCKDJ4HRIJSOLGB";

export const getPaymentHistory = async () => {
  const payments = await server
    .payments()
    .forAccount(ACCOUNT_PUBLIC_KEY)
    .limit(10)
    .order("desc")
    .call();

  return payments.records
    .filter((p) => p.type === "payment")
    .map((p) => ({
      id: p.id,
      from: p.from,
      to: p.to,
      amount: `${p.amount} XLM`,
      date: p.created_at.split("T")[0],
      status: "Success",
    }));
};