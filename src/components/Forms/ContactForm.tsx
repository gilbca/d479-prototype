import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ThankYouModal from "../ThankYouModal/ThankYouModal";

const ContactForm = () => {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    zone: "",
    comments: "",
  });
  const [isInvalid, setIsInvalid] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.id]: e.target.value });
    console.log(input);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setIsInvalid(true);
    }

    if (form.checkValidity() === true) {
      setShowModal(true);
      setIsInvalid(false);
      console.log(
        "Form submitted with the following data: \n",
        "Name: " + input.fname + " " + input.lname + "\n",
        "Email: " + input.email + "\n",
        "Phone: " + input.phone + "\n",
        "Time Zone: " + input.zone + "\n",
        "Comments: " + input.comments
      );
    }
  };

  // Reset form fields when modal is closed
  useEffect(() => {
    if (!showModal) {
      setInput({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        zone: "",
        comments: "",
      });
    }
  }, [showModal]);

  return (
    <Form
      noValidate
      validated={isInvalid}
      className="bg-light rounded px-4 py-3 shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-4">Send Us a Message</h2>
      <Row>
        <Col>
          <Form.Group className="mb-3 form-group" controlId="fname">
            <Form.Control
              type="text"
              placeholder=""
              value={input.fname}
              onChange={handleChange}
              required
            />
            <Form.Label>First Name *</Form.Label>
            <Form.Control.Feedback type="invalid">
              Please provide a first name.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3 form-group" controlId="lname">
            <Form.Control
              type="text"
              placeholder=""
              value={input.lname}
              onChange={handleChange}
              required
            />
            <Form.Label>Last Name *</Form.Label>
            <Form.Control.Feedback type="invalid">
              Please provide a last
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3 form-group" controlId="email">
        <Form.Control
          type="email"
          placeholder=""
          value={input.email}
          onChange={handleChange}
          required
        />
        <Form.Label>Email *</Form.Label>
        <Form.Control.Feedback type="invalid">
          Please provide an email address.
        </Form.Control.Feedback>
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3 form-group" controlId="phone">
            <Form.Control
              type="text"
              placeholder=""
              value={input.phone}
              onChange={handleChange}
            />
            <Form.Label>Phone</Form.Label>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3 form-group" controlId="zone">
            <Form.Control
              type="text"
              placeholder=""
              value={input.zone}
              onChange={handleChange}
            />
            <Form.Label>Time Zone</Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3 form-group" controlId="comments">
        <Form.Control
          as="textarea"
          placeholder=""
          rows={3}
          value={input.comments}
          onChange={handleChange}
        />
        <Form.Label>Comments</Form.Label>
      </Form.Group>
      <Button
        variant="primary"
        className="text-light d-flex ms-auto"
        type="submit"
      >
        Submit
      </Button>
      <ThankYouModal
        show={showModal}
        setShow={setShowModal}
        title={`Thank you, ${input.fname}!`}
        message={
          "We have received your message and will get back to you as soon as" +
          " we can. Please feel to browse the rest of our site and learn more about " +
          "the beautiful island of Taniti."
        }
      />
    </Form>
  );
};

export default ContactForm;
