import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function MainContent() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await logOut().then(navigate("/"));
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexGrow: "10",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ToastContainer />
      <h1>MainContent</h1>
      <Button onClick={handleClick}>Log Out</Button>
    </div>
  );
}

export default MainContent;
