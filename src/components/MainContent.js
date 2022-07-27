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
      <h1 style={{ marginTop: "3rem" }}>Create Your Plan</h1>
      <ToolList tools={tools} />
    </div>
  );
}

export default MainContent;
