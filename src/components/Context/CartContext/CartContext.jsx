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
      item.quantity += obj.quantity; /* si ya está en la carta solo actualizamos la cantidad */
    } else {
      // setCart(obj)
      cart.push(obj);
    }
  };

  const isInCart = (id) => {
    /* si el carrito esta vacío (longitud 0), no hay posibilidad que esté 
    duplicado ya que está vacío, entonces retornamos FALSE */
    if (cart.length === 0) {
      return false;
    } else {
      /* si la longitud es dif. de 0, iteramos el carrito y buscamos el 
      item mediante su ID */
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].item.id === id) {
          return true; /* si ya está en el carrito, retornamos TRUE */
        }
      }
    }
  };
  
  const removeFromCart = (id) => {
    /* filtramos los items con IDs diferentes al que recibe esta función.
    Esto crea un array nuevo, excluyendo al item que tiene un ID coincidente 
    con el valor del parámetro "id" de esta función. 
    Finalmente, pasamos ese array a la función "setCart" */
    setCart(cart.filter((i => i.item.id !== id)));
  };
  
  const clearCart = () => {
    /* Limpiamos el carrito pasando un array vacío a la función "setCart" */
    console.log("Carrito limpiado")
    setCart([])
  };

  return (
    <CartContext.Provider value={[cart, addToCart, removeFromCart, clearCart]}>
      {children}
    </CartContext.Provider>
  );
};
