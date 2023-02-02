import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, handleShowModal }) {
  return (
    <Row>
      {projects.length === 0 ? (
        <h4 style={{ textAlign: "center" }}>You have no Plans!</h4>
      ) : (
        projects.map((project) => (
          <Col key={project.id} xs={12} sm={6} md={4}>
            <ProjectCard
              handleShowModal={handleShowModal}
              id={project.id}
              title={project.title}
            />
          </Col>
        ))
      )}
    </Row>
  );
}

export default ProjectList;
