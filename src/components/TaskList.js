import React from "react";
import Task from "./Task";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/Constants.js";

function TaskList(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <ul style={{ listStyle: "none" }}>
      {props.taskData.map((task) => {
        return (
          <li
            ref={drag}
            className="task"
            key={task.eventKey}
            style={{ opacity: isDragging ? 0.5 : 1 }}
          >
            <Task title={task.title} description={task.description} />
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
