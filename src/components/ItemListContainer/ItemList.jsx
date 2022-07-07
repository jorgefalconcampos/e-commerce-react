import Row from "react-bootstrap/Row";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {items.map((item) => (
          <Item key={item.id} item={item}></Item>
      ))}
    </Row>
  );
};

export default ItemList;
