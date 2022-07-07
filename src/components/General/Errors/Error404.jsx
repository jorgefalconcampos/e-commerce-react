import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
// import error404 from "../../../images/ouch-illustrations/error404.png";
import error404 from "../../../static/images/ouch-illustrations/error404.png";

const Error404 = () => {
  return (
    <Container fluid className="p-1">
      <Row className="m-4 px-1 d-flex justify-content-center rounded">
        <Col xs={12} className=" pt-5 my-2 pb-2 text-center">
          <h1>Oh no... parece que esta página no existe</h1>
          <Image width={350} src={error404} className="mx-auto"></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
