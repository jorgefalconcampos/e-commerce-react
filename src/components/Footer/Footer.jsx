// componentes
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container fluid className="d-flex justify-content-center bg-dark">
      <Row className="text-center py-3">
        <Col xs={12}>
          <p className="text-white">
            {new Date().getFullYear()} | Mi tienda en React
          </p>
        </Col>
        <Col xs={12}>
          <p className="text-white footer-link">
            Illustrations by{" "}
            <a href="https://icons8.com/illustrations/author/N3YOxdn12Kox">
              Marina Mogulska
            </a>{" "}
            from <a href="https://icons8.com/illustrations">Ouch!</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;