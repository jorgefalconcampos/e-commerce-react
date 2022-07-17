import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ItemDetailViewPrice from "./ItemDetailViewPrice";
import ItemDetailViewCarousel from "./ItemDetailViewCarousel";
import Breadcrumb from "react-bootstrap/Breadcrumb";

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
        <Col lg={7}>
          <ItemDetailViewCarousel product={item}/>
        </Col>
        <Col lg={5}>
          {/* ItemDetailViewPrice es el equivalente a ItemDetail */}
          <ItemDetailViewPrice product={item}/>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
