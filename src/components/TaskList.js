import React from "react";
import Task from "./Task";

import { Accordion } from "react-bootstrap";

function TaskList(props) {
  return (
    <Accordion defaultActiveKey="0">
      {props.taskData.map((task) => {
        return (
          <Task
            key={task.eventKey}
            eventKey={task.eventKey}
            title={task.title}
            description={task.description}
          />
        );
      })}
    </Accordion>
  );
}

export default TaskList;
