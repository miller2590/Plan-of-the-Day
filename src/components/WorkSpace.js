import React, { useState } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import TaskCardColumn from "./TaskCardColumn";
import Item from "./Item";
import { arrayMove, insertAtIndex, removeAtIndex } from "../utils/array";
import { Container } from "react-bootstrap";
import AddCard from "./AddCard";

function WorkSpace() {
  const [itemGroups, setItemGroups] = useState({
    group1: {
      title: "Unassigned",
      items: ["1", "2", "3"],
    },
    group2: {
      title: "To Do",
      items: ["4", "5", "6"],
    },
    group3: {
      title: "In Progress",
      items: ["7", "8", "9"],
    },
    group4: {
      title: "Done",
      items: ["10", "11", "12"],
    },
  });

  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = ({ active }) => {
    setActiveId(active.id);
  };

  const handleDragCancel = () => setActiveId(null);

  // handleDragOver moves item overlay over containers and inserts item overlay into list
  const handleDragOver = ({ active, over }) => {
    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeContainer = active.data.current.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId || over.id;

    if (activeContainer !== overContainer) {
      setItemGroups((itemGroups) => {
        const activeIdex = active.data.current.sortable.index;
        const overIndex =
          over.id in itemGroups
            ? itemGroups[overContainer].items.length + 1
            : over.data.current.sortable.index;

        return moveBetweenContainers(
          itemGroups,
          activeContainer,
          activeIdex,
          overContainer,
          overIndex,
          active.id
        );
      });
    }
  };

  // handleDragEnd enters actual item into list
  const handleDragEnd = ({ active, over }) => {
    // if user drops item outside of a container
    if (!over) {
      setActiveId(null);
      return;
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current.sortable.containerId;
      const overContainer = active.data.current.sortable.containerId;
      const activeIndex = active.data.current.sortable.index;
      const overIndex =
        over.id in itemGroups
          ? itemGroups[overContainer].items.length + 1
          : over.data.current.sortable.index;

      setItemGroups((itemGroups) => {
        let updatedItems;
        if (activeContainer === overContainer) {
          updatedItems = {
            ...itemGroups,
            [overContainer]: {
              title: itemGroups[overContainer].title,
              items: arrayMove(
                itemGroups[overContainer].items,
                activeIndex,
                overIndex
              ),
            },
          };
        } else {
          updatedItems = moveBetweenContainers(
            itemGroups,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id
          );
        }
        return updatedItems;
      });
    }
  };

  const moveBetweenContainers = (
    items,
    activeContainer,
    activeIndex,
    overContainer,
    overIndex,
    item
  ) => {
    return {
      ...items,
      [activeContainer]: {
        title: itemGroups[activeContainer].title,
        items: removeAtIndex(items[activeContainer].items, activeIndex),
      },
      [overContainer]: {
        title: itemGroups[overContainer].title,
        items: insertAtIndex(items[overContainer].items, overIndex, item),
      },
    };
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragCancel={handleDragCancel}
      onDragEnd={handleDragEnd}
    >
      <h1>Work Space</h1>
      <AddCard
        uItems={"group1"}
        itemGroups={itemGroups}
        setuItems={setItemGroups}
      />
      <Container className="container" style={{ display: "flex" }}>
        {Object.keys(itemGroups).map((group) => (
          <TaskCardColumn
            id={group}
            title={itemGroups[group].title}
            key={group}
            items={itemGroups[group].items}
            actitiveId={activeId}
          />
        ))}
      </Container>
      <DragOverlay>
        {activeId ? <Item id={activeId} dragOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
}

export default WorkSpace;
