import React from "react";
import { Card } from "react-bootstrap";

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
    <Card style={style} className="item">
      Item {id}
    </Card>
  );
};

export default Item;
