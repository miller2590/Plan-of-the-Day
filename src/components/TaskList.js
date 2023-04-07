import React from "react";
import Task from "./Task";

function TaskList(props) {
  return (
    <ul style={{ listStyle: "none" }}>
      {props.taskData.map((task) => {
        return (
          <li className="task" key={task.eventKey}>
            <Task title={task.title} description={task.description} />
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
