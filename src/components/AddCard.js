import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddCard({ addCard, uItems, setuItems }) {
  const [title, setTitle] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setuItems([...uItems, { title }]);
    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formAddCard">
        <Form.Label>Add New Card</Form.Label>
        <Form.Control
          type="text"
          placeholder="Card Title"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default AddCard;
