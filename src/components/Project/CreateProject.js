import React from "react";
import { Button } from "react-bootstrap";
import TitleModal from "../TitleModal";

function CreateProject({
  handleCreateProject,
  handleShowTitle,
  showTitle,
  title,
  handleTitle,
  handleCloseTitle,
}) {
  const handleClick = () => {
    handleShowTitle();
  };
  return (
    <div>
      <TitleModal
        showTitle={showTitle}
        handleCreateProject={handleCreateProject}
        title={title}
        handleTitle={handleTitle}
        handleCloseTitle={handleCloseTitle}
      />
      <Button size="sm" variant="success" onClick={handleClick}>
        Create a Project
      </Button>
    </div>
  );
}

export default CreateProject;
