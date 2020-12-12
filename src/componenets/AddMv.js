import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddMv = ({
  AddMovieHandle,
  CancelMovieAddHandle,
  setNewTitle,
  setNewDescription,
  setNewUrl,
  setRate,
}) => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={AddMovieHandle}>
        <Modal.Title>Give movie details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control
              required
              type="text"
              placeholder="Enter movie title"
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              required
              rows={3}
              placeholder="Enter movie description here"
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              required
              type="number"
              placeholder="Enter movie rate "
              onChange={(e) => setRate(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              required
              type="text"
              placeholder="Enter Poster Url"
              onChange={(e) => setNewUrl(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <button className="modalBtnCancel" onClick={CancelMovieAddHandle}>
          cancel
        </button>
        <button className="modalBtnSave" type="submit" onClick={AddMovieHandle}>
          Save changes
        </button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default AddMv;
