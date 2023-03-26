import React from "react";
import ProjectList from "./Project/ProjectList";
import CloseModal from "../components/CloseModal";
import { Container, Row, Col } from "react-bootstrap";

function MainContent() {
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
      <CloseModal />
      <Container className="project-list-container">
        <ProjectList />
      </Container>
    </Row>
  );
}

export default MainContent;
