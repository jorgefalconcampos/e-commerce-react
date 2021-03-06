// librerías/dependencias
import { Link } from "react-router-dom";
import { useContext } from "react";
// context & providers
import { CartContext } from "../../Context/CartContext/CartContext";
// componentes
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import CartItemDetail from "./CartItemDetail";
import CartSummaryDetail from "./CartSummaryDetail";
// estilos, iconos, imágenes, etc
import Trash3Fill from "react-bootstrap-icons/dist/icons/trash3-fill";
import empty from "../../../static/images/ouch-illustrations/empty.png";

const CartDetail = () => {
  const { cartBadgeCount, cart, clearCart } = useContext(CartContext);

  const eliminarCarrito = () => {
    clearCart();
  };

  return (
    <Container fluid className="">
      <Row className="m-1 m-lg-4 d-flex justify-content-center rounded">
        {cart.length > 0 ? (
          <>
            {/* detalle de artículos */}
            <Col sm={11} md={8} lg={9} className="">
              <section id="products_section">
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="pt-2"> Tu carrito de compras</h1>
                  <Button
                    onClick={eliminarCarrito}
                    variant="danger"
                    className="my-2"
                    aria-label={`Limpiar todo tu carrito (${cartBadgeCount} elementos)`}
                  >
                    <span>Limpiar carrito</span>&nbsp;
                    <Trash3Fill></Trash3Fill>
                  </Button>
                </div>
                <hr></hr>
                {cart.map((product) => (
                  <Row
                    key={product.item.id}
                    className="d-flex justify-content-center p-2 py-md-3 m-2 m-md-0 m-lg-0 mb-lg-3 border rounded"
                  >
                    <CartItemDetail product={product} />
                  </Row>
                ))}
              </section>
            </Col>

            {/* resumen */}
            <Col sm={11} md={4} lg={3} className="text-center">
              <section id="summary_section">
                <CartSummaryDetail />
              </section>
            </Col>
          </>
        ) : (
          <>
            <Col sm={12} className="text-center my-2">
              <h1 className="my-5">Aún no hay artículos en tu carrito.</h1>
              <Link to="/products">
                <Button size="lg" variant="primary">
                  Ir a comprar
                </Button>
              </Link>
            </Col>
            <Col sm={12} className="text-center pb-5">
              <Image src={empty} width="400" className="mx-auto"></Image>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default CartDetail;
