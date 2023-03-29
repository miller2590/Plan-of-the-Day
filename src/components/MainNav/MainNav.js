import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./MainNav.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CreateProject from "../Project/CreateProject";

function MainNav() {
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
    <Navbar
      collapseOnSelect
      bg="light"
      expand="md"
      className="flex-md-column h-100 p-0"
      id="nav-container"
    >
      <ToastContainer />
      <Container className="h-100 flex-md-column p-2">
        <Navbar.Brand className="me-0" href="/home">
          Plan of the Day
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="w-100 align-items-start">
          <Nav className="me-auto flex-md-column w-100 align-items-center">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <CreateProject />

            <Button size="sm" onClick={handleLogOut} className="w-75 mt-2">
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
