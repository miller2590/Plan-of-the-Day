import React from "react";
import ToolList from "./ToolList";
import CloseModal from "../components/CloseModal";

function MainContent({
  tools,
  show,
  handleClose,
  closeId,
  handleDelete,
  handleShow,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <CloseModal
        show={show}
        handleClose={handleClose}
        closeId={closeId}
        handleDelete={handleDelete}
      />
      <div>
        <h1 style={{ padding: "1rem" }}>Create Your Plan</h1>
        <ToolList handleShow={handleShow} tools={tools} />
      </div>
    </div>
  );
}

export default MainContent;
