// librerías/dependencias
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
// componentes
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import LoadingScreen from "../General/LoadingScreens/SpinnerLoading";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");
    let queryCollectionFilter;

    categoryName
      ? (queryCollectionFilter = query(queryCollection, where("categoria", "==", categoryName), where("disponible", "==", true)))
      : (queryCollectionFilter = query(queryCollection, where("disponible", "==", true)));

    getDocs(queryCollectionFilter)
      .then((resp) =>
        setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  }, [categoryName]);

  return (
    <>
      <Container className="py-4">
        {loading ? <LoadingScreen /> : <ItemList items={products}></ItemList>}
      </Container>
    </>
  );
};

export default ItemListContainer;