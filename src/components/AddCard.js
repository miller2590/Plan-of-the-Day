import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddCard({ uItems, setuItems, itemGroups }) {
  const [newCard, setNewCard] = useState("");

  const handleTitle = (e) => {
    setNewCard(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setuItems((prev) => {
      let updatedItems = {
        ...prev,
        [uItems]: {
          title: itemGroups[uItems].title,
          items: [...itemGroups[uItems].items, newCard],
        },
      };
      return updatedItems;
    });
    setNewCard("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formAddCard">
        <Form.Label>Add New Card</Form.Label>
        <Form.Control
          type="text"
          placeholder="Card Title"
          value={newCard}
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
