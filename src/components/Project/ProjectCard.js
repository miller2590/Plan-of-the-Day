import React from "react";
import { Card, Button, CloseButton } from "react-bootstrap";

function ProjectCard({ id, title, handleShow }) {
  return (
    <Card className="m-1">
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
        <Card.Title>{title ? title : "New Project"}</Card.Title>
        <Card.Text>Create your Project!</Card.Text>
        <Button size="sm" variant="primary">
          Let's Go!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
