import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (obj) => {
    /* el objeto "obj" viene de "ItemDetailViewPrice" y es algo como:
    { item: product, quantity: contador } */
    let itemID = obj.item.id;

    if (isInCart(itemID)) {
      let item = cart.find((i) => i.item.id === itemID);
      item.quantity +=
        obj.quantity; /* si ya está en la carta solo actualizamos la cantidad */
    } else {
      alert("push");
      cart.push(obj);
    }
  };

  const isInCart = (id) => {
    if (cart.length === 0) {
      return false;
    } else {
      console.log(id);
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].item.id === id) {
          return true;
        }
      }
    }
  };
  const removeFromCart = (id) => {
    let item = cart.find((i) => i.item.id === id);
    console.log(item);
  };
  const clearCart = () => {
    // cart = [];
  };

  return (
    <CartContext.Provider value={[cart, addToCart]}>
      {children}
    </CartContext.Provider>
  );
};
