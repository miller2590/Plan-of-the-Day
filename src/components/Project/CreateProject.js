import React from "react";
import { Button } from "react-bootstrap";
import TitleModal from "../TitleModal";
import { useMain } from "../../contexts/MainContext";

function CreateProject() {
  const { toggleShowTitle } = useMain();
  const handleClick = () => {
    toggleShowTitle();
  };

  return (
    <div>
      <TitleModal />
      <Button size="sm" variant="success" onClick={handleClick}>
        Create a Project
      </Button>
    </div>
  );
}

export default CreateProject;
