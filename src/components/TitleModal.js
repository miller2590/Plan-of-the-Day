import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function TitleModal({
  showTitle,
  toggleShowTitle,
  handleCreateProject,
  title,
  handleTitle,
}) {
  const handleSave = (e) => {
    e.preventDefault();
    handleCreateProject(title);
    toggleShowTitle();
  };
  return (
    <>
      <Modal show={showTitle} onHide={toggleShowTitle}>
        <Modal.Header closeButton>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSave}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Name your Project</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                onChange={(e) => handleTitle(e)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="danger" onClick={toggleShowTitle}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default TitleModal;
