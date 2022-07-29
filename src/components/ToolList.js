import React from "react";

import { ListGroup } from "react-bootstrap";

function ToolList({ tools }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tools.length === 0 ? (
        <h3 style={{ padding: "1rem" }}>You have no Plans!</h3>
      ) : (
        tools.map((tool, i) => (
          <ListGroup key={i} variant="flush">
            <ListGroup.Item>{tool}</ListGroup.Item>
          </ListGroup>
        ))
      )}
    </div>
  );
}

export default ToolList;
