// librerías/dependencias
import { useContext } from "react";
// context & providers
import { CartContext } from "../Context/CartContext/CartContext";
// componentes
import Badge from "react-bootstrap/Badge";
// estilos, iconos, imágenes, etc
import Cart from "react-bootstrap-icons/dist/icons/cart";

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