import React from "react";
import { Card, Button, CloseButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMain } from "../../contexts/MainContext";

function ProjectCard({ id, title }) {
  const { handleModal } = useMain();

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
          onClick={() => handleModal(id)}
        />
        <Card.Title>{title ? title : "New Project"}</Card.Title>
        <Card.Text>Create your Project!</Card.Text>

        <Link to={`/home/workSpace/${id}`}>
          <Button size="sm" variant="primary">
            Let's Go!
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
