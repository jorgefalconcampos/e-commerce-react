import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import LoadingScreen from "../General/LoadingScreens/SpinnerLoading";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();
  // const [error, setError] = useState(false); // si hay error durante la carga

  // simulamos llamada a una API con delay de 2 seg. Lo ponemos dentro de
  // useEffect con un array de dependencias vacío para que se ejecute solo 1 vez

  // useEffect(() => {
  //   const db = getFirestore();
  //   const queryProduct = doc(db, "items", "5lzDVRm80iJ6kBrFwxo4");
  //   getDoc(queryProduct).then((resp) =>
  //     setProduct({ id: resp.id, ...resp.data() })
  //   );
  // }, []);

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");
    getDocs(queryCollection)
      .then(
        (resp) =>
          setProducts(
            resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        // setProduct({ id: resp.id, ...resp.data() })
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryName]);

  console.log(products);

  // console.log(product);

  // useEffect(() => {
  //   if (categoryName) {
  //     getFetch
  //       .then((resp) =>
  //         setProducts(resp.filter((prod) => prod.categoria === categoryName))
  //       )
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   } else {
  //     getFetch
  //       .then((resp) => setProducts(resp))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   }
  // }, [categoryName]);

  // console.log(categoryName);

  return (
    <>
      <Container className="py-4">
        {loading ? <LoadingScreen /> : <ItemList items={products}></ItemList>}
      </Container>
    </>
  );
};

export default ItemListContainer;
