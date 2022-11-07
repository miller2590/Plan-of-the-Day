import React from "react";
import ProjectList from "./Project/ProjectList";
import CloseModal from "../components/CloseModal";
import { Container, Row, Col } from "react-bootstrap";

function MainContent({
  projects,
  show,
  handleClose,
  closeId,
  handleDelete,
  handleShow,
}) {
  return (
    <Row className="main-content-container">
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <header>
          <h1>Dashboard</h1>
        </header>
      </Col>
      <CloseModal
        show={show}
        handleClose={handleClose}
        closeId={closeId}
        handleDelete={handleDelete}
      />
      <Container className="project-list-container">
        <ProjectList handleShow={handleShow} projects={projects} />
      </Container>
    </Row>
  );
}

export default MainContent;
