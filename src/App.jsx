// librerías/dependencias
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// componentes
import NavBar from "./components/NavBar/NavBar"
// import Formulario from "./components/Formulario/Formulario"
import CartDetail from './components/Cart/CartDetail/CartDetail'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
// estilos
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <BrowserRouter>
        <NavBar/>
           <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/cart" element={<CartDetail/>} />
            {/* <Route path="/contact" element={<Formulario input = { Input }></Formulario>} /> */}
          </Routes>      
    </BrowserRouter>
    
  )
}

export default App
