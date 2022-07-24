import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../General/LoadingScreens/SpinnerLoading";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();
  // const [error, setError] = useState(false); // si hay error durante la carga

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
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryName]);

  console.log(products);

  return (
    <>
      <Container className="py-4">
        {loading ? <LoadingScreen /> : <ItemList items={products}></ItemList>}
      </Container>
    </>
  );
};

export default ItemListContainer;