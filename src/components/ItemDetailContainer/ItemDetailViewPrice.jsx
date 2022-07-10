import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { StarFill, BoxSeam } from "react-bootstrap-icons";

const ItemViewPrice = ({ product }) => {
  return (
    <>
      <Row className=" text-center text-lg-start">
        <Col className="">
          <section>
            <h1 className="item-title">{product.nombre}</h1>
            <h2 className="item-detail">{product.detalle}</h2>

            <Row className="py-1 my-2 d-flex justify-content-around justify-content-lg-start">
              <Col xs={6} lg={12} className="d-flex justify-content-center justify-content-lg-start">
                <div className="d-flex align-items-center py-1">
                  <StarFill color="orange" />
                  &nbsp;4.5&nbsp;|&nbsp;<span>123,456 reseñas</span>
                </div>
              </Col>
              <Col xs={6} lg={12} className="d-flex justify-content-center justify-content-lg-start">
                <div className="pt-1" style={{ width: 90 }}>
                  <OverlayTrigger
                    key="bottom"
                    placement="right"
                    overlay={
                      <Tooltip id="right">
                        <strong>{product.disponible}</strong>&nbsp;unidades en stock
                      </Tooltip>
                    }
                  >
                    <div className="d-flex align-items-center">
                      <BoxSeam color="red" />
                      &nbsp;En stock
                    </div>
                  </OverlayTrigger>
                </div>
              </Col>
            </Row>

            <Badge bg="success" className="p-2 item-eligibility">
              ¡Este producto es elegible para envío gratis!
            </Badge>

            <div className="mt-3 p-0 pb-0">
              <div className="item-price mx-sm-auto mx-lg-0">
                <h3>
                  ${product.precio}&nbsp;{product.divisa}
                </h3>
              </div>

              <h4 className="item-info-title">Información del producto:</h4>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <p>{product.composicion}</p>
                &nbsp;|&nbsp;
                <p>{product.medidas}</p>
              </div>
            </div>

            <hr />

            <Row className="py-1 my-1 d-flex align-items-center">
              <label htmlFor="qtty_product">Cantidad:</label>
              <Col xs={4} className="">
                <Form.Select className="mt-1" id="qtty_product">
                  <option value="1">999</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </Col>
              <Col xs={8}>
                <Button variant="primary" className="w-100 my-2 p-2">
                  Añadir al carrito
                </Button>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default ItemViewPrice;