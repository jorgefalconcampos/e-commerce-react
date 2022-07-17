import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (obj) => {
    // el objeto viene de "ItemDetailViewPrice" y es algo como:
    // { item: product, quantity: contador }

    cart.push(obj);

    if (isInCart(obj.item.id)) {
      alert("ya en la carta");
    } else {
      alert("no en la carta");
    }
  };
  const removeFromCart = (id) => {};
  const clearCart = () => {};
  const isInCart = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
  };

  return (
    <CartContext.Provider value={[cart, addToCart]}>
      {children}
    </CartContext.Provider>
  );
};
