import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../NavBar/CartWidget";
import { BoxSeam } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const linkClasses = "nav-dropdown-link text-capitalize";

  // categories links
  const links = [
    {
      className: linkClasses,
      to: "/categories/madera",
      name: "madera",
    },
    {
      className: linkClasses,
      to: "/categories/papel",
      name: "papel",
    },
  ];

  const isLinkActive = (isActive) => {
    if (isActive) {
      return "nav-item-active";
    } else {
      return "nav-item";
    }
  };

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
