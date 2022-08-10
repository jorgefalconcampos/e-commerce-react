// librerías/dependencias
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
// context & providers
import { CartContext } from "../Context/CartContext/CartContext";
// componentes
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const Item = ({ item }) => {
  const { categoryName } = useParams();
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const agregarAlCarrito = () => {
    const producto = { item: item, quantity: 1 };
    addToCart(producto);
    setAdded(true);
  };

  const quitarItemDelCarrito = () => {
    setAdded(false);
    removeFromCart(item.id);
  };

  return (
    <Col>
      <Card>
        <div className="item-price-preview">
          ${item.precio}&nbsp;{item.divisa}
          {Number(item.envio) !== 0 ? (
            <>
              <br></br>
              <span className="item-env">+${item.envio} de envío</span>
            </>
          ) : null}
        </div>
        <Card.Img variant="top" src={item.img[0]} className="card-img-top" />
        <Link
          to={`/detail/${item.id}`}
          className="link-rm"
          aria-label={`Abrir ${item.nombre} en la página de detalle `}
        >
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>{item.detalle}</Card.Text>
          </Card.Body>
        </Link>
        <Card.Footer>
          <Row className="d-flex align-items-center justify-content-between">
            <Col xs={6}>
              {!categoryName ? (
                <>
                  <Link
                    className="text-capitalize"
                    to={`/categories/${item.categoria}`}
                    aria-label={`Abrir la página de detalle de la categoría ${item.categoria}`}
                  >
                    <Badge className="p-2 bg-dark">{item.categoria}</Badge>
                  </Link>
                </>
              ) : null}
              {Number(item.envio) === 0 ? (
                <Badge className="mx-2 p-2 bg-success">¡Envío gratis!</Badge>
              ) : null}
            </Col>

            <Col xs={6} className="text-end">
              {added ? (
                <Button
                  onClick={quitarItemDelCarrito}
                  variant="warning"
                  aria-label={`Quitar 1 ${item.nombre} del carrito`}
                >
                  Quitar del carrito
                </Button>
              ) : item.stock > 0 ? (
                <Button
                  onClick={agregarAlCarrito}
                  variant="outline-primary"
                  aria-label={`Añadir 1 ${item.nombre} al carrito`}
                >
                  Agregar al carrito
                </Button>
              ) : (
                <p className="d-inline item-cat-detail">Sin stock</p>
              )}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Item;
