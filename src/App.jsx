// librerías/dependencias
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// componentes
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Error404 from './components/General/Errors/Error404'
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
            {/* Illustration by <a href="https://icons8.com/illustrations/author/N3YOxdn12Kox">Marina Mogulska</a> from <a href="https://icons8.com/illustrations">Ouch!</a> */}
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ItemListContainer/>} />
            <Route path="/cart" element={<CartDetail/>} />
            <Route path="*" element={<Error404/>}/>
            {/* <Route path="/contact" element={<Formulario input = { Input }></Formulario>} /> */}
          </Routes>      
    </BrowserRouter>
    
  )
}

export default App
