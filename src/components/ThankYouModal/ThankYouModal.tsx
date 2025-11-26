import { Button, Modal } from "react-bootstrap";

type ThankYouModalProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  title: string;
  message: string;
};

const ThankYouModal = ({
  show,
  setShow,
  title,
  message,
}: ThankYouModalProps) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary text-light" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ThankYouModal;
