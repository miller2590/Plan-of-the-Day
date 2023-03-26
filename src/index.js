import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import { MainProvider } from "./contexts/MainContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
