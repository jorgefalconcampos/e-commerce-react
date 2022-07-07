import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log(item)
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
          <Link to={`/detail/${item.id}`}>
            <Button variant="outline-primary">Ver detalle</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Item;
