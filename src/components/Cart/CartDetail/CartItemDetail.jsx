// librerías/dependencias
import { Link } from "react-router-dom";
import { useContext } from "react";
// context & providers
import { CartContext } from "../../Context/CartContext/CartContext";
// componentes
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// estilos, iconos, imágenes, etc
import XSquareFill from "react-bootstrap-icons/dist/icons/x-square-fill";

const CartItemDetail = ({ product }) => {
  const { removeFromCart } = useContext(CartContext);

  const removeItemFromCart = () => {
    removeFromCart(product.item.id);
  };

  return (
    <>
      <Col
        xs={12}
        sm={4}
        md={4}
        lg={2}
        className="py-2 text-center text-lg-start"
      >
        <Link to={`/detail/${product.item.id}`}>
          <img
            src={product.item.img[0]}
            className="rounded cart-sm-img"
            alt=""
          />
        </Link>
      </Col>
      <Col xs={12} sm={8} md={8} lg={7} className="text-sm-start text-center">
        <Link to={`/detail/${product.item.id}`}>
          <h3>
            {product.item.nombre}&nbsp;
            <small className="text-muted">({product.item.estado})</small>
          </h3>
        </Link>
        <span className="lead">{product.item.detalle}</span>
        <p className="pt-2">
          <b>
            ${product.item.precio} {product.item.divisa}
          </b>
        </p>
      </Col>
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={3}
        className="d-flex justify-content-center justify-content-sm-end"
      >
        <Row className="d-flex justify-content-center justify-content-sm-end align-items-start align-self-start">
          <Col xs={7} sm={7} md={6} lg={8} className="text-center ">
            <label htmlFor="qtty_item_1">Cantidad:</label>
            <Form.Control
              className="text-center mx-1"
              readOnly
              // plaintext
              // defaultValue={initial}
              // type="number"
              placeholder={product.quantity}
              // value={count || ""}
            />

            {/* <Form.Select className="mt-1" id="qtty_item_1">
                  
                  <option value="1">999</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select> */}
          </Col>
          <Col xs={7} sm={7} md={7} lg={10} className="text-center text-sm-end">
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip id="bottom">
                  Eliminar <strong>{product.item.nombre}</strong> de tu carrito.
                </Tooltip>
              }
            >
              <Button
                onClick={removeItemFromCart}
                variant="warning"
                className="my-2"
                aria-label={`Quitar ${product.item.nombre} de tu carrito`}
              >
                <span>Quitar</span>&nbsp;
                <XSquareFill></XSquareFill>
              </Button>
            </OverlayTrigger>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default CartItemDetail;