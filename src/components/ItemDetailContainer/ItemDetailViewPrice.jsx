// librerías/dependencias
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// context & providers
import { CartContext } from "../Context/CartContext/CartContext";
// componentes
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ItemCount from "./ItemCount";
// estilos, iconos, imágenes, etc
import { StarFill, BoxSeam, XSquareFill, CartCheckFill, Trash3Fill } from "react-bootstrap-icons";

const ItemDetailViewPrice = ({ product }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState();
  const [addAgain, setAddAgain] = useState(false);

  console.log(cart);

  const isFreeShipping = (shippingPrice) => {
    if (Number(shippingPrice) === 0) {
      return true;
    } else {
      return false;
    }
  };

  const funcionContador = (contador) => {
    console.log("el valor del contador es: " + contador);
    setCantidad(contador);
    const producto = { item: product, quantity: contador };
    addToCart(producto);
    setAddAgain(false);
  };

  const quitarItemDelCarrito = () => {
    console.log("quitarItemDelCarrito")
    setAddAgain(true);
    removeFromCart(product.id);
  };

  const eliminarCarrito = () => {
    setAddAgain(true);
    clearCart()
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

            {cantidad && !addAgain ? (
              <Row>
                <Col xs={5}>
                  <Link to="/cart">
                    <Button className="mx-1 my-2" variant="primary">
                      <span>Terminar compra</span>&nbsp;
                      <CartCheckFill></CartCheckFill>
                    </Button>
                  </Link>

                  <OverlayTrigger
                    key="bottom"
                    placement="right"
                    overlay={
                      <Tooltip id="remove_from_cart">
                        Tu <strong>{product.nombre}</strong> se eliminará por
                        completo de tu carrito.&nbsp;
                        {cantidad < 2 ? null : <>(<strong>{cantidad}</strong> unidades).</>}
                      </Tooltip>
                    }
                  >
                    <Button
                      className="mx-1 my-2"
                      variant="warning"
                      onClick={quitarItemDelCarrito}
                    >
                      <span>Quitar del carrito</span>&nbsp;
                      <XSquareFill></XSquareFill>
                    </Button>
                  </OverlayTrigger>

                  <Button
                    className="mx-1 my-2"
                    variant="danger"
                    onClick={eliminarCarrito}
                  >
                    <span>Limpiar el carrito</span>&nbsp;
                    <Trash3Fill></Trash3Fill>
                  </Button>
                </Col>
              </Row>
            ) : (
              <ItemCount
                // product={product}
                // setCantidad={setCantidad}
                // setAddAgain={setAddAgain}
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
