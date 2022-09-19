import React from "react";
import { Button } from "react-bootstrap";

function CreateProject({ handleCreateProject }) {
  const handleClick = () => {
    handleCreateProject();
  };
  return (
    <div>
      <Button size="sm" variant="success" onClick={handleClick}>
        Create a Project
      </Button>
    </div>
  );
}

export default CreateProject;
