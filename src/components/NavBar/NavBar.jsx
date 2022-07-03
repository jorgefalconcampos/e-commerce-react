import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { BoxSeam } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <BoxSeam color="white" size={60} className="px-2" />
          React Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container fluid>
            <Row>
              <Col className="text-center">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Items</Nav.Link>
                  <Nav.Link href="#pricing">Precios</Nav.Link>
                </Nav>
              </Col>
              <Col lg="auto" className="text-center">
                <Nav class="me-auto">
                  <Nav.Link href="#deets">
                    <CartWidget />
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
