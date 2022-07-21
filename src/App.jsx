import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { styles } from "./utils/styles";
import { AuthProvider } from "./contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Container style={styles.AppContainer}>
      <AuthProvider>
        <div style={styles.LandingPageContainer}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </Container>
  );
}

export default App;
