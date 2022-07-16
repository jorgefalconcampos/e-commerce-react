import { useContext } from "react";
import { ItemsContext } from "./ItemsContext";
import ItemsCard from "./ItemsCard";

const ItemList = () => {
  const [items, setItems] = useContext(ItemsContext);

  console.log(items);

  return (
    <>
      <h1>ddd</h1>

      {items.map((item, index) => (
        <ItemsCard key={index} data={item} />
      ))}
    </>
  );
};

export default ItemList;
