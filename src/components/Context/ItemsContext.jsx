// import { createContext, useState } from "react";

// export const ItemsContext = createContext();

// const initialState = [
//   {
//     id: 1,
//     nombre: "Alebrije de león",
//     detalle: "Alebrije con figura tallada de león",
//     composicion: "Madera de roble",
//     categoria: "madera",
//     medidas: "24x19x90cm",
//     precio: 390,
//     divisa: "MXN",
//     stock: 7,
//     envio: 0
//   },
//   {
//     id: 2,
//     nombre: "Alebrije de zorro",
//     detalle: "Alebrije de papel maché con forma de zorro",
//     composicion: "Pasta de papel",
//     categoria: "papel",
//     medidas: "29x12x90cm",
//     precio: 790,
//     divisa: "MXN",
//     stock: 12,
//     envio: 300
//   },
// ];

// export const ItemsProvider = ({ children }) => {
//     const [items, setItems] = useState(initialState);

//     return (
//         <ItemsContext.Provider value={[items, setItems]}>
//             {children}
//         </ItemsContext.Provider>
//     )
// }
