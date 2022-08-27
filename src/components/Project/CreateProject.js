import React from "react";
import { Button } from "react-bootstrap";

function CreateProject({ handleCreateTodoTool }) {
  const handleClick = () => {
    handleCreateTodoTool();
  };
  return (
    <div>
      <Button onClick={handleClick}>Todo List</Button>
    </div>
  );
}

export default CreateProject;
