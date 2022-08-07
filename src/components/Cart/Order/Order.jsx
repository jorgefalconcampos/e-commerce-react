// librerías/dependencias
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// context & providers
import { CartContext } from "../../Context/CartContext/CartContext";
// componentes
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import MyForm from "./MyForm";
import Alert from "react-bootstrap/Alert";
import LoadingScreen from "../../General/LoadingScreens/SpinnerLoading";

// context & providers
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";

const Order = () => {
  const { clearCart } = useContext(CartContext);

  const [showMessage, setShowMessage] = useState(false);
  const [orderData, setOrderData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { orderId } = useParams();

  const actualizarEstadoCollections = () => {
    const db = getFirestore();

    // actualiza el documento
    // TO DO: natch update
    const updateItemCollection = doc(db, "items", "5lzDVRm80iJ6kBrFwxo4");
    updateDoc(updateItemCollection, {
      stock: 1100,
    }).then(() => console.log("Actualizar"));

    const updateOrderCollection = doc(db, "orders", orderId);
    updateDoc(updateOrderCollection, {
      finished: true,
    }).then(() => console.log("Actualizar"));

    setShowMessage(true);
    clearCart();
  };

  useEffect(() => {
    // console.log("current order ID: " + currentOrderID);

    const db = getFirestore();
    const queryOrder = doc(db, "orders", orderId);
    getDoc(queryOrder)
      .then((resp) => {
        if (resp._document !== null) {
          //  console.log(resp);
          resp.data().finished ? setIsFinished(true) : setIsFinished(false);
          setOrderData({ id: resp.id, ...resp.data() });
        } else {
          setShowMessage(true);
          setError(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
        console.log(orderData);
        // setLoading(false);
        // ((currentOrderID !== 0) && (Object.getOwnPropertyNames(setOrderData).length == 0))
        // ? setExisting(true) : setError(true);
      });
  }, [orderId]);

  console.log(orderData);

  return (
    <>
      <Container className="py-2">
        <Breadcrumb className="mx-5 mt-4">
          <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item href={`/cart`} className="text-capitalize">
            Carrito
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Generar orden</Breadcrumb.Item>
        </Breadcrumb>

        <div className="pt-3 mx-5 px-5">
          {/* bg={isFreeShipping(product.envio) ? "success" : "secondary"} */}

          <Alert show={showMessage} variant={!error ? "success" : "warning"}>
            <Alert.Heading>
              {!error ? "¡Genial!" : "Oh no... al parecer esta orden no existe"}
            </Alert.Heading>
            {!error ? (
              <p>
                Tu orden fue generada. ID de la orden:{" "}
                <Alert.Link href="#">{orderId}</Alert.Link>
              </p>
            ) : null}
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
        </div>

        {loading ? (
          <LoadingScreen />
        ) : (
          <Row className="d-flex justify-content-center my-4">
            {!error ? (
              !isFinished ? (
                <Col lg={6}>
                  <MyForm greatTotal={20} />
                  <Button
                    onClick={actualizarEstadoCollections}
                    variant="primary"
                    type="submit"
                    className="mt-4 mb-4 p-3 container-fluid"
                  >
                    Generar orden
                  </Button>
                </Col>
              ) : (
                <div className="fade alert alert-primary show">
                  <h1 >La orden <b>{orderId}</b> ya ha sido finalizada.</h1>
                </div>
              )
            ) : null}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Order;
