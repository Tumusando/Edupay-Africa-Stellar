const BASE_URL = "http://localhost:5000/api/stellar";

export async function fetchTransactions() {
  const res = await fetch(`${BASE_URL}/history`);
  const data = await res.json();
  return data.payments || [];
}

export async function sendPayment(payload) {
  const res = await fetch(`${BASE_URL}/pay`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return await res.json();
}