import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import LoadingScreen from "../General/LoadingScreen/LoadingScreen";
import ItemDetail from "./ItemDetail";
import Container from "react-bootstrap/Container";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    getFetch
      .then((resp) => setProduct(
        resp.find((prod) => prod.id === Number(productId))
      ))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, productId);

  console.log(productId);

  // Ya con un products.filter((product) => product.id === id) sale

  return (
    <div>
      <Container className="py-4">
        {loading ? <LoadingScreen /> : <ItemDetail item={product}/>}
      </Container>
    </div>
  );
};

export default ItemDetailContainer;
