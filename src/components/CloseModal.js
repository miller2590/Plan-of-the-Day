import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMain } from "../contexts/MainContext";

function CloseModal() {
  const { showModal, handleModal, handleDelete } = useMain();

  return (
    <>
      <Modal show={showModal.show} onHide={() => handleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Todo List</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this list?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(showModal.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CloseModal;
