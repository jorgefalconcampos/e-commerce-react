import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { StarFill, BoxSeam } from "react-bootstrap-icons";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext/CartContext";
import { Link } from "react-router-dom";
import Trash3Fill from "react-bootstrap-icons/dist/icons/trash3-fill";
import CartCheckFill from "react-bootstrap-icons/dist/icons/cart-check-fill";
import XSquareFill from "react-bootstrap-icons/dist/icons/x-square-fill";

const ItemDetailViewPrice = ({ product }) => {
  const [cart, addToCart] = useContext(CartContext);
  const [cantidad, setCantidad] = useState();

  console.log(cart);

  const isFreeShipping = (shippingPrice) => {
    if (shippingPrice === 0) {
      return true;
    } else {
      return false;
    }
  };

  const removeItem = (id) => {};

  const funcionContador = (contador) => {
    console.log("el valor del contador es: " + contador);
    setCantidad(contador);

    const producto = { item: product, quantity: contador };
    addToCart(producto);
  };

  return (
    <>
      <Row className=" text-center text-lg-start">
        <Col>
          <section>
            <h1 className="item-title">{product.nombre}</h1>
            <h2 className="item-detail">{product.detalle}</h2>

            <Row className="py-1 my-2 d-flex justify-content-around justify-content-lg-start">
              <Col
                xs={6}
                lg={12}
                className="d-flex justify-content-center justify-content-lg-start"
              >
                <div className="d-flex align-items-center py-1">
                  <StarFill color="orange" />
                  &nbsp;4.5&nbsp;|&nbsp;<span>123,456 reseñas</span>
                </div>
              </Col>
              <Col
                xs={6}
                lg={12}
                className="d-flex justify-content-center justify-content-lg-start"
              >
                <div className="pt-1" style={{ width: 90 }}>
                  <OverlayTrigger
                    key="bottom"
                    placement="right"
                    overlay={
                      <Tooltip id="right">
                        <strong>{product.stock}</strong>&nbsp;unidades en stock
                      </Tooltip>
                    }
                  >
                    <div className="d-flex align-items-center">
                      <BoxSeam color="red" />
                      &nbsp;En stock
                    </div>
                  </OverlayTrigger>
                </div>
              </Col>
            </Row>

            <Badge
              bg={isFreeShipping(product.envio) ? "success" : "secondary"}
              className="p-2 item-eligibility"
            >
              {isFreeShipping(product.envio)
                ? "Este producto tiene envío gratis"
                : `Costo de envío: $${product.envio}`}
            </Badge>

            <div className="mt-3 p-0 pb-0">
              <div className="item-price mx-sm-auto mx-lg-0">
                <h3 className="my-auto py-1">
                  ${product.precio}&nbsp;{product.divisa}
                </h3>
              </div>

              <h4 className="item-info-title">Información del producto:</h4>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <p>{product.composicion}</p>
                &nbsp;|&nbsp;
                <p>{product.medidas}</p>
              </div>
            </div>

            <hr />

            {cantidad ? (
              <div>
                <Link to="/cart">
                  <Button className="mx-1" variant="primary">
                    <span>Terminar compra</span>&nbsp;
                    <CartCheckFill></CartCheckFill>
                  </Button>
                </Link>
                {/* <Button className="mx-1" variant="danger">Quitar del carrito</Button> */}
                <Button className="mx-1" variant="warning">
                  <span>Quitar del carrito</span>&nbsp;
                  <XSquareFill></XSquareFill>
                </Button>

                <Button className="mx-1" variant="danger">
                  <span>Eliminar todo el carrito</span>&nbsp;
                  <Trash3Fill></Trash3Fill>
                </Button>
              </div>
            ) : (
              <ItemCount
                stock={product.stock}
                initial={1}
                onAdd={funcionContador}
                productName={product.nombre}
              />
            )}
          </section>
        </Col>
      </Row>
    </>
  );
};

export default ItemDetailViewPrice;
