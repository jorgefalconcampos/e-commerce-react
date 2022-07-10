// librerías/dependencias
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// componentes
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Error404 from './components/General/Errors/Error404'
// import Formulario from "./components/Formulario/Formulario"
import CartDetail from './components/Cart/CartDetail/CartDetail'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
// estilos
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <BrowserRouter>
        <NavBar/>
           <Routes>
            <Route index path="/" element={<Home/>} />
            {/* <Route path="/categories" element={<ItemListContainer/>} /> */}
            <Route path="/products" element={<ItemListContainer/>} />
            <Route path="/categories/:categoryName" element={<ItemListContainer/>} />
            <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<CartDetail/>} />
            <Route path="*" element={<Error404/>}/>
            {/* <Route path="*" element={ <Navigate to="/"/>}  /> */}
            {/* <Route path="/contact" element={<Formulario input = { Input }></Formulario>} /> */}
          </Routes>
          <Footer/>

    </BrowserRouter>
    
  )
}

export default App
