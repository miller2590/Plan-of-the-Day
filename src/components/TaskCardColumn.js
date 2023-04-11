import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

import TaskCard from "./TaskCard";

const TaskCardColumn = ({ id, items }) => {
  const { setNodeRef } = useDroppable({ id });

  const style = {
    minWidth: "6rem",
    margin: "1rem",
    padding: "1rem",
    border: "1px solid black",
    borderRadius: "5px",
    listStyleType: "none",
    height: "fit-content",
    minHeight: "4rem",
  };

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <ul style={style} ref={setNodeRef}>
        {items.map((item) => (
          <TaskCard key={item} id={item} />
        ))}
      </ul>
    </SortableContext>
  );
};

export default TaskCardColumn;
