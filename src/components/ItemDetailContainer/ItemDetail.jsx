import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ item }) => {
  return (
    <Col>
      <Card>
        {/* <Card.Img variant="top" src={item.src} /> */}
        <Card.Body>
          <Card.Title>
            {item.nombre}
          </Card.Title>
          <Card.Text>
            {item.detalle}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="outline-primary">Ver detalle</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default ItemDetail;