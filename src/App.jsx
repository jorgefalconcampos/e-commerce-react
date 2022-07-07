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
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// estilos
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <BrowserRouter>
        <NavBar/>
           <Routes>
            te quedaste en: 3:53:53
            {/* https://coderhouse.zoom.us/rec/play/iIyconI5pdE580sgDc5_r38ZLNRk34ioE7qEcrAL1cf6Y-grQWjgyhnpUlD6BpGh0KPbXTOyHHcbBFQO.iVhEkOVgbhgQDJBc?continueMode=true&_x_zm_rtaid=_npW0wGkS_-uf2defB2Axw.1656879685285.0fb566f00fe0295811e26f8753c0e528&_x_zm_rhtaid=388 */}


            {/* Illustration by <a href="https://icons8.com/illustrations/author/N3YOxdn12Kox">Marina Mogulska</a> from <a href="https://icons8.com/illustrations">Ouch!</a> */}
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ItemListContainer/>} />
            <Route path="/detail" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<CartDetail/>} />
            <Route path="*" element={<Error404/>}/>
            {/* <Route path="/contact" element={<Formulario input = { Input }></Formulario>} /> */}
          </Routes>      
    </BrowserRouter>
    
  )
}

export default App
