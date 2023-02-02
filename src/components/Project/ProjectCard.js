import React from "react";
import { Card, Button, CloseButton } from "react-bootstrap";

import { Link } from "react-router-dom";

function ProjectCard({ id, title, handleShowModal }) {
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
          onClick={() => handleShowModal(id)}
        />
        <Card.Title>{title ? title : "New Project"}</Card.Title>
        <Card.Text>Create your Project!</Card.Text>

        <Link to={`workSpace/${id}`}>
          <Button size="sm" variant="primary">
            Let's Go!
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
