// librerías/dependencias
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
// componentes
import Container from "react-bootstrap/Container";
import LoadingScreen from "../General/LoadingScreens/SpinnerLoading";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, "items", productId);
    getDoc(queryProduct)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  }, [productId]);

  return (
    <>
      <Container className="py-4">
        {loading ? <LoadingScreen /> : <ItemDetail item={product} />}
      </Container>
    </>
  );
};

export default ItemDetailContainer;