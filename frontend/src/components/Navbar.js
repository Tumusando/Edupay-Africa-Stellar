import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">EduPay Africa</h2>

      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
          Dashboard
        </NavLink>

        <NavLink to="/payments" className={({ isActive }) => isActive ? "active" : ""}>
          Payments
        </NavLink>

        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
          Profile
        </NavLink>
      </div>
    </nav>
  );
}