// componente creado para repaso de la clase del 9 de julio del 2022: "Eventos y Context"

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import { useState } from "react";

const EventsAndContext = () => {
  const [value, setValue] = useState("");

  const onChangeValue = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  const onSubmitEvt = (e) => {
    e.preventDefault();
    console.log(`Se hizo submit de lo siguiente: ${value}`);
  };

  return (
    <>
      <div className="py-5 m-3 bg-info">
        <Form onSubmit={onSubmitEvt}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control placeholder="Enter email" onChange={onChangeValue} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EventsAndContext;
