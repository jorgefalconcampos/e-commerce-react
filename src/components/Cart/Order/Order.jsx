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
  query,
  collection,
  doc,
  where,
  getDoc,
  updateDoc,
  writeBatch,
  documentId,
  getDocs,
} from "firebase/firestore";

const Order = () => {
  const { cart, clearCart } = useContext(CartContext);

  const [showMessage, setShowMessage] = useState(false);
  const [orderData, setOrderData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { orderId } = useParams();

  const handleSubmit = () => {
    alert("x");
  };

  const db = getFirestore();

  const agregarDatosComprador = (e, orderId) => {
    // e.preventDefault();

    //  Se actualiza el estado de la orden, el campo "finished" es TRUE
    const updateOrderCollection = doc(db, "orders", orderId);
    updateDoc(updateOrderCollection, {
      buyer: dataForm,
      finished: true,
    }).then(() => console.log("Orden finalizada."));

    setShowMessage(true);
    clearCart();
  };

  const actualizarEstadoCollections = async () => {
    const queryCollectionStock = collection(db, "items");

    // query de los items en carrito
    const queryActualizarStock = query(
      queryCollectionStock,
      where(documentId(),"in", cart.map((el) => el.item.id))
    );

    console.log(queryActualizarStock);

    const batch = writeBatch(db);

    // obtenemos los items y actualizamos su stock
   
      await getDocs(queryActualizarStock)
        .then((resp) =>
          resp.docs.forEach((res) => {
            batch.update(res.ref, {
              stock:
                res.data().stock -
                cart.find((el) => el.item.id === res.id).quantity,
            });
          })
        )
        .catch(() => alert("Ocurrió un error al actualizar el stock."))
        .finally(() => alert("compra realizada"));
    

    // aplicamos cambios
    await batch.commit();

    agregarDatosComprador(orderId);
  };

  useEffect(() => {
    const db = getFirestore();
    const queryOrder = doc(db, "orders", orderId);
    getDoc(queryOrder)
      .then((resp) => {
        // si el documento no es nulo (existe en Firebase), lo seteamos en orderData
        if (resp._document !== null) {
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
          <Alert show={showMessage} variant={!error ? "success" : "warning"}>
            <Alert.Heading>
              {!error ? "¡Genial!" : "Oh no... al parecer esta orden no existe"}
            </Alert.Heading>
            {!error ? (
              <p>
                Tu orden fue generada. ID de la orden:
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
                  <MyForm
                    greatTotal={orderData.total}
                    handleSubmit={handleSubmit}
                  />
                </Col>
              ) : (
                <div className="fade alert alert-primary show">
                  <h1>
                    La orden <b>{orderId}</b> ya ha sido finalizada.
                  </h1>
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
