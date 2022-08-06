import React from "react";

import { ListGroup } from "react-bootstrap";
import TodoToolCard from "./Todo/TodoToolCard";

function ToolList({ tools, handleShow }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tools.length === 0 ? (
        <h3 style={{ padding: "1rem" }}>You have no Plans!</h3>
      ) : (
        tools.map((tool) => (
          <ListGroup key={tool} variant="flush">
            <ListGroup.Item>
              <TodoToolCard handleShow={handleShow} id={tool} />
            </ListGroup.Item>
          </ListGroup>
        ))
      )}
    </div>
  );
}

export default ToolList;
