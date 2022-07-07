import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ item }) => {
  return (
    <Col>
      <Card>
        <img src={`/src/${item.url}`} className="card-img" alt="" />
        {/* <Card.Img variant="top" src={`/src/${item.url}`} /> */}
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