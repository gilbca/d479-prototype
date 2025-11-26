import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import ThankYouModal from "../ThankYouModal/ThankYouModal";

const Newsletter = () => {
  const [showModal, setShowModal] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setIsInvalid(true);
    }

    setIsInvalid(true);
    if (form.checkValidity() === true) {
      setShowModal(true);
      setIsInvalid(false);
      setEmail("");
      console.log(
        "Form submitted with the following data: \n",
        "Email: " + email
      );
    }
  };

  return (
    <Form noValidate validated={isInvalid} onSubmit={handleSubmit}>
      <InputGroup style={{ maxWidth: "33ch" }}>
        <Form.Control
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={handleChange}
          required
          size="sm"
        />
        <Button variant="primary" type="submit" className="text-light">
          Subscribe
        </Button>
        <Form.Control.Feedback type="invalid">
          Please provide an email address.
        </Form.Control.Feedback>
      </InputGroup>
      <ThankYouModal
        show={showModal}
        setShow={setShowModal}
        title="Thank You!"
        message="You have successfully subscribed to our newsletter."
      />
    </Form>
  );
};

export default Newsletter;
