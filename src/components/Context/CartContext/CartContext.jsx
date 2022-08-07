import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartBadgeCount, setCartBadgeCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalEnvios, setTotalEnvios] = useState(0)
  const [currentOrderID, setCurrentOrderID] = useState(0);

  const addToCart = (obj) => {
    /* el objeto "obj" viene de "ItemDetailViewPrice" y es algo como:
    { item: product, quantity: contador } */
    let itemID = obj.item.id;

    if (isInCart(itemID)) {
      let item = cart.find((i) => i.item.id === itemID);
      item.quantity +=
        obj.quantity; /* si ya está en el carrito solo actualizamos la cantidad */

      // setCartBadgeCoount(item.quantity)
    } else {
      // setCart(obj)
      cart.push(obj);
    }

    updateCartBadgeNumber(null, Number(obj.quantity));
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
    let newCart = cart;
    let index = newCart.findIndex(el => el.item.id === id);
    let qtty = newCart[index].quantity;
    newCart.splice(index, 1);
    setCart(newCart)
    updateCartBadgeNumber(id, Number(qtty));
  };

  const clearCart = () => {
    console.log("Carrito limpiado");
    /* Limpiamos el carrito pasando un array vacío a la función "setCart" */
    setCart([]);
    /* Limpiamos el número del Badge poniéndolo en 0 */
    setCartBadgeCount(0);
    setCurrentOrderID(0);
  };

  const setOrderID = (id) => {
    setCurrentOrderID(id);
  }

  const updateCartBadgeNumber = (id, qtty) => {

    if ((id !== undefined) && (id !== null)) {
      // resta items del carrito
      setCartBadgeCount(cartBadgeCount - qtty);
    } else {
      // suma items al carrito
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].quantity) {
          setCartBadgeCount(cartBadgeCount + qtty);
        }
      }
    }
    calcularTotal();
  };

  const calcularTotal = () => {
    let sum = 0;
    let envios = 0;
    cart.forEach(el => {
      // price per item, including repeated
      let price_per_item = Number(el.item.precio) * Number(el.quantity);
      console.log(price_per_item);
      sum += price_per_item;
      envios += Number(el.item.envio);
      setTotalEnvios(envios);
      setTotal(sum+envios);
    })
  };

  function queryLocalStorage(clave) {
    if (localStorage.getItem(clave) === null) {
      return false;
    } else {
      return localStorage.getItem(clave);
    }
  }

  function saveLocalStorage(clave, valor) {
    if (localStorage.getItem(clave) === null && clave != "cart") {
      // no existe en localStorage, entonces lo creamos
      localStorage.setItem(clave, 1);
    } else {
      // si ya existe en localStorage, lo actualizamos
      localStorage.setItem(clave, valor);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartBadgeCount,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartBadgeNumber,
        total,
        totalEnvios,
        currentOrderID,
        setOrderID,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};