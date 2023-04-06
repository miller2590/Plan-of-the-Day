import React from "react";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

function Task(props) {
  return (
    <AccordionItem eventKey={props.eventKey}>
      <AccordionHeader>{props.title}</AccordionHeader>
      <AccordionBody>{props.description}</AccordionBody>
    </AccordionItem>
  );
}

export default Task;
