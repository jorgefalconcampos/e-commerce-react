// librerías/dependencias
import { useState } from "react";
// componentes
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const ItemCount = ({ stock, initial, onAdd, productName }) => {
  
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Row className="py-1 my-1 d-flex align-items-center">
        {stock > 0 ? (
          <>
            <label htmlFor="qtty_input">Cantidad:</label>
            <Col xs={5}>
              <InputGroup className="mt-1">
                <Button
                  onClick={decrement}
                  variant="outline-danger px-3"
                  id="qtty_minus"
                  aria-label={`Disminuir en 1 la cantidad de ${productName}`}
                >
                  -
                </Button>

                <Form.Control
                  className="text-center"
                  readOnly
                  placeholder={initial}
                  value={count || ""}
                />

                <Button
                  onClick={increment}
                  variant="outline-success px-3"
                  id="qtty_plus"
                  aria-label={`Aumentar en 1 la cantidad de ${productName}`}
                >
                  +
                </Button>
              </InputGroup>
            </Col>
            <Col xs={7}>
              <Button
                onClick={() => onAdd(count)}
                variant="primary"
                className="w-100 my-2"
                aria-label={`Añadir ${count} ${productName} al carrito`}
              >
                Añadir al carrito
              </Button>
            </Col>
          </>
        ) : (
          <p className="item-cat-detail">No hay stock disponible en este momento.</p>
        )}
      </Row>
    </>
  );
};

export default ItemCount;
