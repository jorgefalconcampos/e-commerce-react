// librerías/dependencias
import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// context & providers
import { CartContext } from "../../Context/CartContext/CartContext";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/esm/Badge";

const MyForm = ({ greatTotal }) => {
  const { total, cart } = useContext(CartContext);

  const actualizarStock = () => {
    const db = getFirestore();

    // actualiza el documento
    const updateItemCollection = doc(db, "items", "5lzDVRm80iJ6kBrFwxo4");
    updateDoc(updateItemCollection, {
      stock: 1100,
    }).then(() => console.log("Actualizar"));
  };

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
      <Card className="bg-light rounded pt-2 pb-1 px-2 ">
        <Card.Body>
          <Form onSubmit={onSubmitEvt}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Row className="py-2 d-flex align-items-center">
                <Col xs={3} sm={2}>
                  <Form.Label>Nombre(s)</Form.Label>
                </Col>
                <Col xs={9} sm={10}>
                  <Form.Control
                    autoComplete="given-name"
                    placeholder="Escribe tu(s) nombre(s)"
                    onChange={onChangeValue}
                  />
                </Col>
              </Row>

              <Row className="py-2 d-flex align-items-center">
                <Col xs={3} sm={2}>
                  <Form.Label>Apellidos</Form.Label>
                </Col>

                <Col xs={9} sm={10}>
                  <Form.Control
                    autoComplete="family-name"
                    placeholder="Escribe tus apellidos"
                    onChange={onChangeValue}
                  />
                </Col>
              </Row>

              <Row className="py-2 d-flex align-items-center">
                <Col xs={3} sm={2}>
                  <Form.Label className="mt-3">Email</Form.Label>
                </Col>
                <Col xs={9} sm={10}>
                  <Form.Control
                    placeholder="Escribe tu email"
                    onChange={onChangeValue}
                  />
                </Col>
                <Form.Text className="text-muted">
                  Usaremos este email para comunicaciones del estado de tu envío
                  exclusivamente.
                </Form.Text>
              </Row>

              <Row className="py-2 d-flex align-items-center">
                <Col xs={3} sm={2}>
                  <Form.Label className="mt-3">Dirección</Form.Label>
                </Col>

                <Col xs={9} sm={10}>
                  <Form.Control
                    autoComplete="street-address"
                    placeholder="Plaza de la Constitución S/N, Centro, Cuauhtémoc, 06010 Ciudad de México, CDMX"
                    onChange={onChangeValue}
                  />
                </Col>
              </Row>

              <Badge bg="success" className="mt-4 item-eligibility">
                El costo total de tu compra (envío incluido) es de ${greatTotal}
              </Badge>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyForm;
