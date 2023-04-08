import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Container } from "react-bootstrap";
import TaskCard from "./TaskCard";

function WorkSpace() {
  const [languages, setLanguages] = useState([
    "JavaScript",
    "Python",
    "TypeScript",
  ]);

  function handleDragEnd(event) {
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER: " + over.id);

    if (active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        // activeIndex moves to overIndex inside items
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <Container className="p-3" style={{ width: "50%" }} align="center">
        <h1>WorkSpace</h1>
        <SortableContext
          items={languages}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable Hook */}
          {languages.map((language) => (
            <TaskCard key={language} id={language} />
          ))}
        </SortableContext>
      </Container>
    </DndContext>
  );
}

export default WorkSpace;
