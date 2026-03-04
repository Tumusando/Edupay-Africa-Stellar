const API_URL = "http://localhost:5000/api/stellar";

export const sendPayment = async (fromSecret, toPublicKey, amount) => {
  const response = await fetch(`${API_URL}/pay`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fromSecret, toPublicKey, amount }),
  });

  return response.json();
};

export const getPaymentHistory = async () => {
  const response = await fetch(`${API_URL}/history`);
  return response.json();
};