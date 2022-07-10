import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ItemViewPrice from "./ItemDetailViewPrice";
import ItemViewCarousel from "./ItemDetailViewCarousel";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <Container className="py-2">
      <Breadcrumb className="mx-5">
        <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item href={`/categories/${item.categoria}`} className="text-capitalize">
          {item.categoria}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{item.nombre}</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col lg={7} className="">
          <ItemViewCarousel product={item} />
        </Col>
        <Col lg={5} className="">
          <ItemViewPrice product={item} />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
