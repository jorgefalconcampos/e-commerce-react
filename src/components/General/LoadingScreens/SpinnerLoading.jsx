// componentes
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Loading from "../Loading/Loading";

const LoadingScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="py-5 my-5">
          <Stack gap={3} className="py-3 text-center col-4 mx-auto">
            <Loading classOptions="mx-auto my-2" variant="secondary" />
            <h1>Cargando...</h1>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default LoadingScreen;
