import React from "react";

const Item = ({ id, dragOverlay }) => {
  const style = {
    cursor: dragOverlay ? "grabbing" : "grab",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    width: "110px",
    height: "30px",
    marginBottom: "5px",
    paddingLeft: "5px",
    border: "1px solid gray",
    borderRadius: "5px",
    userSelect: "none",
    backgroundColor: "white",
  };

  return (
    <div style={style} className="item">
      Item {id}
    </div>
  );
};

export default Item;
