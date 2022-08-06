import Modal from "react-bootstrap/Modal";

const Modal = () => {
    
  const [showMessage, setShowMessage] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={showMessage} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, ready for oder {orderID}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal;
