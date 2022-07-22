import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import CartItemDetail from "./CartItemDetail";
import CartSummaryDetail from "./CartSummaryDetail";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Link } from "react-router-dom";

const CartDetail = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container fluid className="">
      <Row className="m-1 m-lg-4 d-flex justify-content-center rounded">
        {cart.length > 0 ? (
          <>
            {/* detalle de artículos */}
            <Col sm={11} md={8} lg={9} className="">
              <section id="products_section">
                <h1 className="pt-2"> Tu carrito de compras</h1>
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
            <Col sm={12} className="text-center py-5 my-5">
              <h1 className="my-5 pb-5">Aún no hay artículos en tu carrito.</h1>

              <Link to="/products">
                <Button className="mt-1" size="lg" variant="primary">
                  Ir a comprar
                </Button>
              </Link>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default CartDetail;
