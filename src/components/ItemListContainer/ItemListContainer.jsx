import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import LoadingScreen from "../General/LoadingScreen/LoadingScreen";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();
  // const [error, setError] = useState(false); // si hay error durante la carga

  // simulamos llamada a una API con delay de 2 seg. Lo ponemos dentro de
  // useEffect con un array de dependencias vacío para que se ejecute solo 1 vez
  useEffect(() => {
    if(categoryName) {
      getFetch
      .then((resp) => setProducts(resp.filter((prod) => prod.categoria === categoryName)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }
    else {
      getFetch
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }
  }, [categoryName]);

  console.log(categoryName);

  return (
    <>
      <Container className="py-4">
        {loading ? <LoadingScreen /> : <ItemList items={products}></ItemList>}
      </Container>
    </>
  );
};

export default ItemListContainer;