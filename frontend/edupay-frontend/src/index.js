import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";   // 👈 uyu ni default import, App.js igomba kuba ifite "export default App"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();