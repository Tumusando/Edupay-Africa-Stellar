import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import EducationCoverage from "./pages/EducationCoverage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/education" element={<EducationCoverage />} />
        <Route path="/payments" element={<h2>Payments Page (Coming soon)</h2>} />
        <Route path="/profile" element={<h2>Profile Page (Coming soon)</h2>} />
        <Route path="/login" element={<h2>Login Page (UI only)</h2>} />
        <Route path="/signup" element={<h2>Signup Page (UI only)</h2>} />
      </Routes>
    </Router>
  );
}

export default App;