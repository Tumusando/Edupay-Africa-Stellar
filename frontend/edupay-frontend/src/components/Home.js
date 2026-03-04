function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Welcome to EduPay Africa</h1>
        <p style={styles.subtitle}>
          A Web3 Education & Payment platform powered by Stellar for fast, secure and low-cost transactions across Africa.
        </p>

        <div style={styles.cards}>
          <div style={styles.card}>
            🌍
            <h3>Pan-African Payments</h3>
            <p>Pay school fees securely across Africa.</p>
          </div>

          <div style={styles.card}>
            🎓
            <h3>Education First</h3>
            <p>Supporting students with transparent finance.</p>
          </div>

          <div style={styles.card}>
            🚀
            <h3>Powered by Stellar</h3>
            <p>Fast, low-cost blockchain transactions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    backgroundColor: "#f5f9f6",
    minHeight: "100vh",
  },
  hero: {
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "42px",
    color: "#0a7d32",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#444",
    marginBottom: "40px",
  },
  cards: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "white",
    padding: "25px",
    width: "250px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default Home;