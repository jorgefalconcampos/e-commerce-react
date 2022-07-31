// librerías/dependencias
import { useState } from "react";
// componentes
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const ItemCount = ({ stock, initial, onAdd, productName }) => {
  // const [value, setValue] = useState(initial);
  const [count, setCount] = useState(initial);

  // const onChangeValue = (e) => {
  //   setValue(e.target.value);
  // };

  // const onBlur = (e) => {
  //   let qtty = e.target.value;
  //   if (qtty > stock) {
  //     alert(`No puedes agregar ${qtty} items, el máximo es de ${stock}`);
  //   }
  // };

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

            {/* <span className="px-2">
              {count}
            </span> */}

            <Form.Control
              className="text-center"
              readOnly
              // plaintext
              // defaultValue={initial}
              // type="number"
              placeholder={initial}
              value={count || ""}
              // onBlur={onBlur}
              // onChange={onChangeValue}
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
      </Row>
    </>
  );
};

export default ItemCount;