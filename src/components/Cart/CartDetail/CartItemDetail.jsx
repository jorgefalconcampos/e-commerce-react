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
          <h3 className="link-rm">
            {product.item.nombre}&nbsp;
            <small className="item-txt-muted">({product.item.estado})</small>
          </h3>
        </Link>
        <br></br>
        <span className="lead">{product.item.detalle}</span>
        <p className="pt-2">
          <b>
            ${product.item.precio} {product.item.divisa}
          </b>
          {Number(product.item.envio) !== 0 ? (
            <>
              &nbsp;
              <span className="item-env">+${product.item.envio} de envío</span>
            </>
          ) : null}
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
              placeholder={product.quantity}
            />
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
