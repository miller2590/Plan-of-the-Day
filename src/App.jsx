import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { styles } from "./utils/styles";
import { AuthProvider } from "./contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Container style={styles.AppContainer}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Container>
  );
}

export default App;
