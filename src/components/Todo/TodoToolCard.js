import React from "react";
import { Card, Button } from "react-bootstrap";

function TodoToolCard() {
  return (
    <Card style={{ textAlign: "center" }}>
      <Card.Body>
        <Card.Title>Todo List</Card.Title>
        <Card.Text style={{ flexWrap: "wrap" }}>
          Create your todo list!
        </Card.Text>
        <Button variant="primary">Let's Go!</Button>
      </Card.Body>
    </Card>
  );
}

export default TodoToolCard;
