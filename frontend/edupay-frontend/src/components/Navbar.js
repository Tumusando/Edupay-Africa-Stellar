import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>EduPay Africa</h2>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/payments">Payments</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "15px 20px",
    backgroundColor: "#0a7d32",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
};

export default Navbar;