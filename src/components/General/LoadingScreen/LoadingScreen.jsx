import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from "react-bootstrap/esm/Stack";
import Spinner from 'react-bootstrap/Spinner';

const LoadingScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="py-5 my-5">
        <Stack gap={3} className="py-3 text-center col-4 mx-auto">
          <Spinner className="mx-auto my-2" variant="secondary" animation="border" role="status">
            <span className="visually-hidden">Cargando</span> {/* a11y */}
          </Spinner>
          <h1>Cargando...</h1>
        </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default LoadingScreen