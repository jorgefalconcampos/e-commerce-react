import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import CartItemDetail from "./CartItemDetail";

const CartDetail = () => {
  return (
    <Container fluid className="p-3">
      <Row className="m-4 px-2  d-flex justify-content-center rounded">
        {/* <Col className="text-center py-5 my-5">
          <h1>Aún no hay artículos en tu carrito.</h1>
        </Col> */}

        
        {/* detalle de artículos */}
        <Col sm={11} md={9} className="">
          <section id="products_section">
              <h1 className="pt-2"> Tu carrito de compras</h1>
              <hr></hr>

              <CartItemDetail>

              </CartItemDetail>

              
          </section>
        </Col>

        {/* resumen */}
        <Col sm={11} md={3} className="text-center">
          <section id="summary_section">
            <Card className="text-center my-3">
              <Card.Header>
                <h4>
                  <strong>Resumen de tu pedido</strong>
                </h4>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="ms-1 me-auto">
                    <strong>Subtotal</strong>&nbsp;(2)
                  </div>
                  <span>$400</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="ms-1 me-auto">
                    {/* <div> */}
                    <strong>Envío</strong>
                    {/* </div> */}
                    {/* <span>(costo delmbalaje)</span> */}
                  </div>
                  <Badge bg="success" className="p-2">
                    ¡Gratis!
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="ms-1 me-auto">
                    <strong>TOTAL</strong>
                  </div>
                  <span>$400</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="primary" className="w-100 my-2 p-2">
                    Procesar compra
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default CartDetail;
