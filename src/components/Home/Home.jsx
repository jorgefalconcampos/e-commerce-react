import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import welcome from "../../static/images/ouch-illustrations/welcome.png";

const Home = () => {
  return (
    <Container className="">
      <Row className="d-flex justify-content-center py-4">
        <Col xs={12} className="pb-2 text-center">
          <h1 className="display-5">¡Hola! Te damos una cálida bienvenida a la tienda de React</h1>
          <Image src={welcome} className="mx-auto"></Image>
        </Col>
        <Col xs={12}>
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center py-4">
        <Col xs={12}>
          <Card>
            <Card.Img
              variant="top"
              src="https://previews.123rf.com/images/tomo00/tomo001710/tomo00171000061/88481110-material-del-papel-pintado-publicidad-propaganda-im%C3%A1genes-ventas-venta-ofertas-liquidaciones-arte-po.jpg"
            />
            <Card.Body>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>

      {/* <Row className="d-flex justify-content-center">
        <Col xs={12}>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Home;