import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { BoxSeam } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const linkStyle = {
    display: "block",
    textDecoration: "none",
  };

  const linkStyleActive = {
    textDecoration: "underline",
    fontWeight: "bold",
  };

  const isLinkActive = (isActive) => {
    if (isActive) {
      return "nav-item-active";
    } else {
      return "nav-item";
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className="nav-item">
          <BoxSeam color="white" size={60} className="px-2" />
          Mi tienda en React
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container fluid>
            <Row>
              <Col className="text-center">
                <Nav className="me-auto my-auto">
                  <NavLink
                    to="/"
                    className={({ isActive }) => isLinkActive(isActive)}
                  >
                    Inicio
                  </NavLink>
                  <NavLink
                    to="/products"
                    className={({ isActive }) => isLinkActive(isActive)}
                  >
                    Productos
                  </NavLink>
                </Nav>
              </Col>
              <Col lg="auto" className="text-center">
                <Nav class="me-auto">
                  <NavLink to="/cart" className="nav-item">
                    <CartWidget />
                  </NavLink>
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
