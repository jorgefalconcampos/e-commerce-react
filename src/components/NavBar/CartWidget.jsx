import { useContext } from "react";
import { Cart } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import { CartContext } from "../Context/CartContext/CartContext";

const CartWidget = () => {
  const { cartBadgeCount } = useContext(CartContext);

  return (
    <>
      {cartBadgeCount > 0 ? (
        <>
          <Badge pill bg="primary" className="mx-1">
            {cartBadgeCount}
          </Badge>
          <span className="visually-hidden">items en carrito</span> {/* a11y */}
          <Cart className="" color="white" size={30} />
        </>
      ) : (
        <Cart className="" color="white" size={30} />
      )}
    </>
  );
};

export default CartWidget;
