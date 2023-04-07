import React from "react";
import TaskList from "./TaskList";

function WorkSpace() {
  const taskStuff = [
    {
      title: "Task One",
      description: "Lorem ipsum dolor sit amet consectetur.",
      eventKey: 0,
    },
    {
      title: "Task Two",
      description: "Lorem ipsum dolor sit amet consectetur.",
      eventKey: 1,
    },
    {
      title: "Task Three",
      description: "Lorem ipsum dolor sit amet consectetur.",
      eventKey: 2,
    },
    {
      title: "Task Four",
      description: "Lorem ipsum dolor sit amet consectetur.",
      eventKey: 3,
    },
  ];

  return (
    <div>
      <h1>Work Space</h1>
      <TaskList taskData={taskStuff} />
    </div>
  );
}

export default WorkSpace;
