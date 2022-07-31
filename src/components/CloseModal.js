import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CloseModal({ show, handleClose, closeId, handleDelete }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Todo List</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delte this list?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => handleDelete(closeId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CloseModal;
