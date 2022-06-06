import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function LoginForm({ submitName }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitName(name);
  };

  return (
    <Container className="text-center">
      <Form className="w-50 m-auto mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
