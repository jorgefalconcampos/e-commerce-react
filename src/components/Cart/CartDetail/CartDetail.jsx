import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const CartDetail = () => {
  return (
    <Container fluid className="bg-primary p-3">
      <Row className="m-3 bg-danger d-flex justify-content-center">
        {/* <Col className="text-center py-5 my-5">
          <h1>Aún no hay artículos en tu carrito.</h1>
        </Col> */}

        <Col sm={9} className="bg-success">
          <section id="products_section">
            <h1>sa</h1>
          </section>
        </Col>

        <Col sm={3} className="bg-info text-center">
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
