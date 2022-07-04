import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Trash3Fill from "react-bootstrap-icons/dist/icons/trash3-fill";

const CartItemDetail = () => {
  return (
    <div>

    <Row className="d-flex justify-content-center p-3 m-2 mb-4 border rounded">
      <Col xs={4} md={2}>
        <Image
          src="https://media.geeksforgeeks.org/wp-content/post-ads-banner/2021-12-29-16-30-50-CIP_Icon.png"
          className="rounded"
        ></Image>
      </Col>
      <Col xs={8} md={7}>
        <h3>
          Artículo #1&nbsp;
          <small class="text-muted">(nuevo)</small>
        </h3>
        {/* <h2 class="display-6"><strong>Display 4</strong></h2> */}
        <span className="lead">Alebrije de madera</span>
        <p className="pt-2">
          <b>$3,500</b>
        </p>
      </Col>
      <Col xs={8} md={3} className="d-flex ">
        <Row className="justify-content-end">
          <Col
            sm={8}
            className="d-flex align-content-between flex-wrap justify-content-end "
          >
            <div className="p-1">
              <label htmlFor="qtty_item_1">Cantidad:</label>
              <Form.Select className="mt-1" id="qtty_item_1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </div>
            <div className=" p-1">
              <Button variant="danger" className="pb-2">
                <span>Eliminar </span>&nbsp;
                <Trash3Fill></Trash3Fill>
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="d-flex justify-content-center p-3 m-2 border rounded">
      <Col xs={4} md={2}>
        <Image
          src="https://media.geeksforgeeks.org/wp-content/post-ads-banner/2021-12-29-16-30-50-CIP_Icon.png"
          className="rounded"
        ></Image>
      </Col>
      <Col xs={8} md={7}>
        <h3>
          Artículo #1&nbsp;
          <small class="text-muted">(nuevo)</small>
        </h3>
        {/* <h2 class="display-6"><strong>Display 4</strong></h2> */}
        <span className="lead">Alebrije de madera</span>
        <p className="pt-2">
          <b>$3,500</b>
        </p>
      </Col>
      <Col xs={8} md={3} className="d-flex ">
        <Row className="justify-content-end">
          <Col
            sm={8}
            className="d-flex align-content-between flex-wrap justify-content-end "
          >
            <div className="p-1">
              <label htmlFor="qtty_item_1">Cantidad:</label>
              <Form.Select className="mt-1" id="qtty_item_1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </div>
            <div className=" p-1">
              <Button variant="danger" className="pb-2">
                <span>Eliminar </span>&nbsp;
                <Trash3Fill></Trash3Fill>
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
    </div>

    
  );
};

export default CartItemDetail;
