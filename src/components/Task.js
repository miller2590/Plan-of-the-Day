import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/Constants.js";

function Task(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: "1px solid black",
        borderRadius: "2.5%",
        margin: "1rem",
        padding: ".5rem",
        textAlign: "center",
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Task;
