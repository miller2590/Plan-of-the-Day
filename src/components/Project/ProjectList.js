import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, handleShow }) {
  return (
    <Row>
      {projects.length === 0 ? (
        <h4 style={{ textAlign: "center" }}>You have no Plans!</h4>
      ) : (
        projects.map((project) => (
          <Col key={project} className="col-sm-4">
            <ProjectCard handleShow={handleShow} id={project} />
          </Col>
        ))
      )}
    </Row>
  );
}

export default ProjectList;
