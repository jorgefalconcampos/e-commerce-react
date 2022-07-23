// librerías/dependencias
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { ItemsProvider } from "./components/Context/ItemsContext";
import { CartProvider } from "./components/Context/CartContext/CartContext";


// import ItemList from "./components/Context/ItemList";
// componentes
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Error404 from "./components/General/Errors/Error404";
// import Formulario from "./components/Formulario/Formulario"
import CartDetail from "./components/Cart/CartDetail/CartDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
// estilos
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// te quedaste en 3:37:59
// https://coderhouse.zoom.us/rec/play/aI4qVttXYuNmvNjXRdjvfzSM9lIyYpwVB0Qh6Tor7wKkuxwtgQ7gggXLPLIkkMckI3fpnBzcFEFBpzr6.ZtGXSvq6jG-zzNIS?continueMode=true&_x_zm_rtaid=QJDYDqRSSmitkA6bJ8tXsA.1658538425728.6324efa18049943f493acd718c0eb72b&_x_zm_rhtaid=251

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          {/* <Route path="/categories" element={<ItemListContainer/>} /> */}
          <Route path="/products" element={<ItemListContainer />} />
          <Route
            path="/categories/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="*" element={<Error404 />} />
          {/* <Route path="*" element={ <Navigate to="/"/>}  /> */}
          {/* <Route path="/contact" element={<Formulario input = { Input }></Formulario>} /> */}
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
