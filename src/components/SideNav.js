import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import CreateTodoList from "./Todo/CreateTodoList";

function SideNav({ handleCreateTodoTool }) {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut().then(navigate("/"));
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      style={{
        // display: "flex",

        // width: "fit-content",
        // height: "100vh",
        // flexShrink: "0",
        // flexDirection: "column",
        // alignItems: "center",
        // padding: "1rem",
        // position: "sticky",
        // top: "0",
        border: "1px solid black",
        minHeight: "100vh",
        minWidth: "350px",
      }}
    >
      <h4 style={{ padding: "1rem" }}>Plan of the Day</h4>
      <CreateTodoList handleCreateTodoTool={handleCreateTodoTool} />

      <Button
        // style={{ marginTop: "auto" }}
        className="w-100"
        onClick={handleLogOut}
      >
        <ToastContainer />
        Log Out
      </Button>
    </div>
  );
}

export default SideNav;
