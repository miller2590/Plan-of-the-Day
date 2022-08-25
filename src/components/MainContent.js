import React from "react";
import ToolList from "./ToolList";
import CloseModal from "../components/CloseModal";
import { Container, Row } from "react-bootstrap";

function MainContent({
  tools,
  show,
  handleClose,
  closeId,
  handleDelete,
  handleShow,
}) {
  return (
    <Row className="main-content-container vh-100">
      <header>
        <h1>Create your plan!</h1>
      </header>
      <CloseModal
        show={show}
        handleClose={handleClose}
        closeId={closeId}
        handleDelete={handleDelete}
      />

      <Container className="tool-list-container">
        <ToolList handleShow={handleShow} tools={tools} />
      </Container>
    </Row>
  );
}

export default MainContent;
