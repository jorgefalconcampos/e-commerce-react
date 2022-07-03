// librerías/dependencias
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// componentes
import NavBar from "./components/NavBar/NavBar"
// import Contenedor from "./components/Contenedor/Contenedor"
// import ComponenteClase from "./ComponenteClase"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
// estilos
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <BrowserRouter>
        <NavBar/>
           <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Hola, saludos!"}/>} />
            <Route path="/form" element={<Formulario input = { Input }></Formulario>} />
          </Routes>      
    </BrowserRouter>
    
  )
}

export default App
