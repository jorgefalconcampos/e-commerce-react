// librerías/dependencias
import { BrowserRouter, Routes, Route } from "react-router-dom";
// context & providers
import { CartProvider } from "./components/Context/CartContext/CartContext";
// componentes
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Error404 from "./components/General/Errors/Error404";
import CartDetail from "./components/Cart/CartDetail/CartDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
// estilos, iconos, imágenes, etc
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route
            path="/categories/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;