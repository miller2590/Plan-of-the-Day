import React from "react";
import { Button } from "react-bootstrap";
import TitleModal from "../TitleModal";

function CreateProject({
  handleCreateProject,
  toggleShowTitle,
  showTitle,
  title,
  handleTitle,
}) {
  const handleClick = () => {
    toggleShowTitle();
  };
  return (
    <div>
      <TitleModal
        showTitle={showTitle}
        handleCreateProject={handleCreateProject}
        title={title}
        handleTitle={handleTitle}
        toggleShowTitle={toggleShowTitle}
      />
      <Button size="sm" variant="success" onClick={handleClick}>
        Create a Project
      </Button>
    </div>
  );
}

export default CreateProject;
