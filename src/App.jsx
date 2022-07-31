import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { styles } from "./utils/styles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Container fluid style={styles.AppContainer}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />}>
            <Route path="todo" />
          </Route>
        </Routes>
      </AuthProvider>
    </Container>
  );
}

export default App;
