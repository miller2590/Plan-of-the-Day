import React from "react";
import { Button } from "react-bootstrap";

function CreateTodoList({ handleCreateTodoTool }) {
  const handleClick = () => {
    handleCreateTodoTool();
  };
  return (
    <div>
      <Button onClick={handleClick}>Todo List</Button>
    </div>
  );
}

export default CreateTodoList;
