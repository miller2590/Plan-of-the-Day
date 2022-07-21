import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { styles } from "../utils/styles";
import { useAuth } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useAuth();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      await signUp(email, password);
    } catch (err) {
      toast.error(err.message);
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
                onChange={onEmailChange}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label style={styles.FormLable}>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={onPasswordChange}
                type="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>
            <Form.Group controlId="confirm-password">
              <Form.Label style={styles.FormLable}>Confirm Password</Form.Label>
              <Form.Control
                value={confPassword}
                onChange={onConfPasswordChange}
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
