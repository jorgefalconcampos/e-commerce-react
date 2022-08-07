// librerías/dependencias
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// context & providers
import { CartContext } from "../../Context/CartContext/CartContext";
// componentes
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Loading from "../../../components/General/Loading/Loading";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
// estilos, iconos, imágenes, etc
import LockFill from "react-bootstrap-icons/dist/icons/lock-fill";

const CartSummaryDetail = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  // const handleClose = () => setShow(false);

  const { cart, cartBadgeCount, total, totalEnvios, setOrderID } =
    useContext(CartContext);

  const generarOrden = () => {
    setLoading(true);

    const order = {};

    order.buyer = {
      nombre: "Jorge",
      phone: 123,
      email: "jorge@falcon.com",
    };

    // console.log(cart);

    order.items = cart.map((prod) => {
      const id = prod.item.id;
      const price = Number(prod.item.precio);
      const title = prod.item.nombre;
      return { id, price, title };
    });

    order.total = total;

    order.finished = false;

    console.log(order);

    const db = getFirestore();

    // crea la orden
    const queryInsertCollection = collection(db, "orders");
    addDoc(queryInsertCollection, order)
      .then((resp) => {
        // setTimeout(() => {
        setLoading(false);
        // }, 1200);
        setOrderID(resp.id);
        navigate(`/place-order/${resp.id}`);

        // setShowMessage(true);
      })
      .catch((err) => console.log(err));
    // .finally(() => clearCart());

    // batch update
    // const batch = writeBatch(db);
    // batch.update();

    // batch.commit();
  };


  return (
    <>
      {/* <Alert show={showMessage} variant="success">
          <Alert.Heading>¡Genial!</Alert.Heading>
          <p>Tu orden fue generada.</p>
          <p>ID de la orden: <Alert.Link href="#">{orderID}</Alert.Link>
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => setShowMessage(false)}
              variant="outline-success"
            >
              Cerrar
            </Button>
          </div>
        </Alert>
     */}

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
      <Card className="text-center my-3">
        <Card.Header>
          <h4>
            <strong>Resumen de tu pedido</strong>
          </h4>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="ms-1 me-auto">
              <strong>Subtotal</strong>&nbsp;({cartBadgeCount})&nbsp;
            </div>
            <span>${total - totalEnvios}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="ms-1 me-auto">
              <strong>Envío</strong>
            </div>
            {totalEnvios !== 0 ? (
              <Badge bg="secondary" className="p-2">
                ${totalEnvios}
              </Badge>
            ) : (
              <Badge bg="success" className="p-2">
                ¡Gratis!
              </Badge>
            )}
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="ms-1 me-auto">
              <strong>TOTAL</strong>
            </div>
            <span>${total}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              variant="primary"
              className="w-100 my-2 p-2"
              aria-label={`Procesar compra, total: ${total}`}
              onClick={generarOrden}
            >
              <span>Procesar compra</span>&nbsp;
              {loading ? (
                <Loading classOptions="mr-5" variant="light" size="sm" />
              ) : (
                <LockFill />
              )}
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default CartSummaryDetail;
