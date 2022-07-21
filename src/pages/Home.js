import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Home() {
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
    <div>
      <div>Home</div>
      <ToastContainer />
      <Button onClick={handleClick}>Log Out</Button>
    </div>
  );
}

export default Home;
