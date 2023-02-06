import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CloseModal({ showModal, handleModal, showModalId, handleDelete }) {
  return (
    <>
      <Modal show={showModal} onHide={() => handleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Todo List</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this list?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(showModalId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CloseModal;
