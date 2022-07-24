// componentes
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// estilos, iconos, imágenes, etc
import welcome from "../../static/images/ouch-illustrations/welcome.png";

const Home = () => {
  return (
    <Container className="">
      <Row className="d-flex justify-content-center py-4">
        <Col xs={12} className="pb-2 text-center">
          <h1 className="display-5">
            ¡Hola! Te damos una cálida bienvenida a la tienda de React
          </h1>
          <Image src={welcome} className="mx-auto"></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;