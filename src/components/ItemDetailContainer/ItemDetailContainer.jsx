import { useParams } from "react-router-dom"

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

const ItemDetailContainer = () => {

  const obj = useParams();
  console.log(obj);

  // Ya con un products.filter((product) => product.id === id) sale

  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer