// componente creado para repaso de la clase del 9 de julio del 2022: "Eventos y Context"

import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import ProgressLoading from "../General/LoadingScreens/ProgressLoading";
import SpinnerLoading from "../General/LoadingScreens/SpinnerLoading";
import { useState } from "react";
import axios from "axios";

const EventsAndContext = () => {

  const [value, setValue] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onSubmitEvt = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    const userInput = value.toLowerCase().replace(/ /g, "");

    if (userInput) {
      try {
        const { data } = await axios(
          `https://api.github.com/users/${userInput}`
        );
        setUser(data);
      } catch (err) {
        alert("Error " + err.message);
      }
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    e.target[0].value = "";
    setValue("");
  };

  return (
    <>
      {user.id ? (
        <h1>usuario encontrado</h1>
      ) : (
        <h1>No haz iniciado una búsqueda o la búsqueda no fue satisfactoria</h1>
      )}

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

      {isLoading ? <SpinnerLoading /> : null}
    </>
  );
};

export default EventsAndContext;
