import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DetailsModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Agrega aquí los detalles que deseas mostrar */}
        <p>Aquí van los detalles que deseas mostrar.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;
