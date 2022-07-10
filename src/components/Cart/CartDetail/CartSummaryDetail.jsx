import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const CartSummaryDetail = () => {
  return (
    <Card className="text-center my-3">
      <Card.Header>
        <h4>
          <strong>Resumen de tu pedido</strong>
        </h4>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <div className="ms-1 me-auto">
            <strong>Subtotal</strong>&nbsp;(999)&nbsp;
          </div>
          <span>$999,999,000</span>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <div className="ms-1 me-auto">
            <strong>Envío</strong>
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
  );
};

export default CartSummaryDetail;