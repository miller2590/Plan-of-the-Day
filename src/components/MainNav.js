import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import "./MainNav.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function MainNav({ handleCreateTodoTool }) {
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
      bg="light"
      expand="md"
      className="flex-md-column flex-md-wrap h-100 p-0 "
      sticky="top"
    >
      <ToastContainer />
      <Container className="h-100 flex-md-column p-2">
        <Navbar.Brand href="#home">Plan of the Day</Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="w-100 align-items-start">
          <Nav className="me-auto flex-md-column w-100 align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Actions" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item onClick={handleCreateTodoTool}>
                Create Project
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
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
