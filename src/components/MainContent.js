import React from "react";
import ToolList from "./ToolList";

function MainContent({ tools }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div>
        <h1 style={{ padding: "1rem" }}>Create Your Plan</h1>
        <ToolList tools={tools} />
      </div>
    </div>
  );
}

export default MainContent;
