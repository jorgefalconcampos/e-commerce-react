import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import LoadingScreen from "../General/LoadingScreen/LoadingScreen";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false); // si hay error durante la carga

  // simulamos llamada a una API con delay de 2 seg. Lo ponemos dentro de
  // useEffect con un array de dependencias vacío para que se ejecute solo 1 vez
  useEffect(() => {
    getFetch
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* {loading ? (
        <LoadingScreen />
      ) : (
        <ul>
          {products.map((prod) => (
            <li key={prod.id}>{prod.nombre}</li>
          ))}
        </ul>
      )} */}

      <Container className="py-4">
        { loading ? (
        <LoadingScreen/>
        ): (
            <Row xs={1} md={2} lg={3} className="g-4">
            {products.map((prod) => (
              <Col>
                <Card >
                  <Card.Img variant="top" src="https://via.placeholder.com/600x300" />
                  <Card.Body>
                    <Card.Title>{prod.nombre}</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link to="/detail">
                       
                        <Button variant="outline-primary">Ver detalle</Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        )

        }

       
      </Container>
    </div>
  );
};

export default ItemListContainer;
