import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={item.img[0]} className="card-img-top" />
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
            <Button variant="outline-primary" aria-label={`Abrir ${item.nombre} en la página de detalle `}>Ver detalle</Button>
          </Link>
          &nbsp;
          <Link to={`/categories/${item.categoria}`}>
            <Button className="text-capitalize" variant="outline-primary" aria-label={`Abrir la página de detalle de la categoría ${item.categoria}`}>{item.categoria}</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Item;