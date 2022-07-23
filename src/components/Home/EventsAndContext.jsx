// componente creado para repaso de la clase del 9 de julio del 2022: "Eventos y Context"

import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import ProgressLoading from "../General/LoadingScreens/ProgressLoading";
import SpinnerLoading from "../General/LoadingScreens/SpinnerLoading";
import { useState } from "react";
import axios from "axios";

const EventsAndContext = () => {
  // te quedaste en 3:29:30
  //https://coderhouse.zoom.us/rec/play/Y27pjWVnthj6Y7JYFQ0_ZOOKRngmElE_tDNJbp70b7BhAfxWH960kHJFCla62-H87zBM9u2xPu0awWIl.dbWLulQYWEIJsP3B?continueMode=true&_x_zm_rtaid=F-onLsOWTIWxsYigC4Fbsg.1657424590264.a9ccce0a7d9b4c67c8f253cab0333f94&_x_zm_rhtaid=336

  const [value, setValue] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // console.log(value)

  const onChangeValue = (e) => {
    // console.log(e.target.value);
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
        console.log(data);
        // console.log(res.data);
        setUser(data);
      } catch (err) {
        console.log("Error " + err.message);
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
