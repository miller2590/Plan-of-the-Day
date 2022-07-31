import React from "react";
import { Card, Button, CloseButton } from "react-bootstrap";

function TodoToolCard({ id, handleShow }) {
  return (
    <Card style={{ textAlign: "center" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          padding: ".5rem",
        }}
      >
        <CloseButton
          style={{
            fontSize: "small",
          }}
          onClick={() => handleShow(id)}
        />
        <Card.Title>{id ? id : "Todo List"}</Card.Title>
        <Card.Text style={{ flexWrap: "wrap" }}>
          Create your todo list!
        </Card.Text>
        <Button size="sm" variant="primary">
          Let's Go!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoToolCard;
