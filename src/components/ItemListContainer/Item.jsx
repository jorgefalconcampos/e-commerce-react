import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/600x300" />
        <Card.Body>
          <Card.Title>
            {item.nombre} {item.id}
          </Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/detail">
            <Button variant="outline-primary">Ver detalle</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Item;
