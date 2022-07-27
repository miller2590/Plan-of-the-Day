import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function SideNav() {
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
        border: "1px solid black",
        flexGrow: "1",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <h4 style={{ padding: "1rem" }}>Plan of the Day</h4>

      <Button className="w-100" onClick={handleClick}>
        <ToastContainer />
        Log Out
      </Button>
    </div>
  );
}

export default SideNav;
