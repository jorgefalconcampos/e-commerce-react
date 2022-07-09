import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import CartItemDetail from "./CartItemDetail";
import CartSummaryDetail from "./CartSummaryDetail";
import Button from "react-bootstrap/Button";

const CartDetail = () => {
  return (
    <Container fluid className="">
      <Row className="m-1 m-lg-4 d-flex justify-content-center rounded">
        {/* <Col sm={12} className="text-center py-5 my-5">
          <h1>Aún no hay artículos en tu carrito.</h1>
          <Button className="mt-5 pt-2" size="lg" variant="primary">Ir a comprar</Button>
        </Col> */}
        
        {/* detalle de artículos */}
        <Col sm={11} md={8} lg={9} className="">
          <section id="products_section">
              <h1 className="pt-2"> Tu carrito de compras</h1>
              <hr></hr>
              <CartItemDetail/>
          </section>
        </Col>

        {/* resumen */}
        <Col sm={11} md={4} lg={3} className="text-center">
          <section id="summary_section">
            <CartSummaryDetail/>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default CartDetail;
