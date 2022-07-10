import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Trash3Fill from "react-bootstrap-icons/dist/icons/trash3-fill";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from 'react-bootstrap/Tooltip';

const CartItemDetail = () => {
  return (
    <div>
      <Row className="d-flex justify-content-center p-2 py-md-3 m-2 m-md-0 m-lg-0 mb-lg-3 border rounded">
        <Col
          xs={12}
          sm={4}
          md={4}
          lg={2}
          className="py-2 text-center text-lg-start"
        >
          <Image
            src="https://media.geeksforgeeks.org/wp-content/post-ads-banner/2021-12-29-16-30-50-CIP_Icon.png"
            className="rounded"
          ></Image>
        </Col>
        <Col xs={12} sm={8} md={8} lg={7} className="text-sm-start text-center">
          <h3>
            Artículo original con un título muy largo#1 del &nbsp;
            <small className="text-muted">(nuevo)</small>
          </h3>
          {/* <h2 className="display-6"><strong>Display 4</strong></h2> */}
          <span className="lead">Alebrije de madera</span>
          <p className="pt-2">
            <b>$3,500</b>
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={3}
          className="d-flex justify-content-center justify-content-sm-end"
        >
          <Row className="d-flex justify-content-center justify-content-sm-end align-items-start align-self-start">
            <Col xs={7} sm={7} md={6} lg={8} className="text-center ">
              <label htmlFor="qtty_item_1">Cantidad:</label>
              <Form.Select className="mt-1" id="qtty_item_1">
                <option value="1">999</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </Col>
            <Col
              xs={7}
              sm={7}
              md={7}
              lg={10}
              className="text-center text-sm-end"
            >
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="bottom">
                    Eliminar el artículo <strong>-nombre-</strong> de tu carrito.
                  </Tooltip>
                }
              >
                <Button variant="danger" className="my-2">
                  <span>Eliminar </span>&nbsp;
                  <Trash3Fill></Trash3Fill>
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center p-2 py-md-3 m-2 m-md-0 m-lg-0 mb-lg-3 border rounded">
        <Col
          xs={12}
          sm={4}
          md={4}
          lg={2}
          className="py-2 text-center text-lg-start"
        >
          <Image
            src="https://media.geeksforgeeks.org/wp-content/post-ads-banner/2021-12-29-16-30-50-CIP_Icon.png"
            className="rounded"
          ></Image>
        </Col>
        <Col xs={12} sm={8} md={8} lg={7} className="text-sm-start text-center">
          <h3>
            Artículo original con un título muy largo#1 del &nbsp;
            <small className="text-muted">(nuevo)</small>
          </h3>
          {/* <h2 className="display-6"><strong>Display 4</strong></h2> */}
          <span className="lead">Alebrije de madera</span>
          <p className="pt-2">
            <b>$3,500</b>
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={3}
          className="d-flex justify-content-center justify-content-sm-end"
        >
          <Row className="d-flex justify-content-center justify-content-sm-end align-items-start align-self-start">
            <Col xs={7} sm={7} md={6} lg={8} className="text-center ">
              <label htmlFor="qtty_item_1">Cantidad:</label>
              <Form.Select className="mt-1" id="qtty_item_1">
                <option value="1">999</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </Col>
            <Col
              xs={7}
              sm={7}
              md={7}
              lg={10}
              className="text-center text-sm-end"
            >
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="bottom">
                    Eliminar el artículo <strong>-nombre-</strong> de tu carrito.
                  </Tooltip>
                }
              >
                <Button variant="danger" className="my-2">
                  <span>Eliminar </span>&nbsp;
                  <Trash3Fill></Trash3Fill>
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CartItemDetail;