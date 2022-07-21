import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { styles } from "../utils/styles";
import { useAuth } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import useAuthFormState from "../hooks/useAuthFormState";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [
    email,
    password,
    confPass,
    handleEmail,
    handlePassword,
    handleConfPass,
    reset,
  ] = useAuthFormState("", "", "");
  const [error, setError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confPass) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      await signUp(email, password);
      reset();
    } catch (err) {
      toast.error(err.message);
      reset();
    }
  };

  return (
    <>
      <ToastContainer />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label style={styles.FormLable}>Email Address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => handleEmail(e)}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label style={styles.FormLable}>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => handlePassword(e)}
                type="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>
            <Form.Group controlId="confirm-password">
              <Form.Label style={styles.FormLable}>Confirm Password</Form.Label>
              <Form.Control
                value={confPass}
                onChange={(e) => handleConfPass(e)}
                type="password"
                placeholder="Confirm password"
                required
              />
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button className="w-50 mt-4" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          <Card.Text className="w-100 text-center mt-2">
            Already have an account?{" "}
            <Button style={{ padding: "0", marginLeft: "4px" }} variant="link">
              Sign In
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default AuthForm;
