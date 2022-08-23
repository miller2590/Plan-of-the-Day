import React from "react";
import { Row, Col } from "react-bootstrap";
import TodoToolCard from "./Todo/TodoToolCard";

function ToolList({ tools, handleShow }) {
  return (
    <Row>
      {tools.length === 0 ? (
        <h3>You have no Plans!</h3>
      ) : (
        tools.map((tool) => (
          <Col key={tool} style={{ display: "flex", justifyContent: "center" }}>
            <TodoToolCard handleShow={handleShow} id={tool} />
          </Col>
        ))
      )}
    </Row>
  );
}

export default ToolList;
