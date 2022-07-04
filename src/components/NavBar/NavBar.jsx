import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { BoxSeam } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const NavBar = () => {
  
  const linkStyle = {
    textDecoration: "none",
    
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" style={linkStyle}>
          <Navbar.Brand href="#home">
            <BoxSeam color="white" size={60} className="px-2" />
            Mi tienda en React
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container fluid>
            <Row>
              <Col className="text-center">
                <Nav className="me-auto">
                  <Link to="/" style={linkStyle}>
                    <Nav.Link href="#home">Inicio</Nav.Link>
                  </Link>
                  <Link to="/products" style={linkStyle}>
                    <Nav.Link href="#products">Productos</Nav.Link>
                  </Link>
                  
                </Nav>
              </Col>
              <Col lg="auto" className="text-center">
                <Nav class="me-auto">
                  <Link to="/cart" style={linkStyle}>
                    <Nav.Link href="#cart">
                      <CartWidget />
                    </Nav.Link>
                  </Link>
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
