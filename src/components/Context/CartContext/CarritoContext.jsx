import { createContext, useState } from "react";

export const CartContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    cart.push(item);
  };
  const removeFromCart = (id) => {};
  const clearCart = () => {};
  const isInCart = (id) => {};

  return (
      <CartContext.Provider value={[cart, addToCart]} >
        {children}
      </CartContext.Provider>
  );
};
