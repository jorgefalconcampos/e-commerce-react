import { articulos } from "../static/images_index.js"

let productos = [
  {
    id: 1,
    nombre: "Alebrije de león",
    detalle: "Alebrije con figura tallada de león",
    composicion: "Madera de roble",
    categoria: "madera",
    medidas: "24x19x90cm",
    precio: 390,
    envio: 0,
    divisa: "MXN",
    stock: 7,
    img: [ 
      articulos.art1_img1, 
      articulos.art1_img2, 
      articulos.art1_img3, 
      articulos.art1_img4, 
    ]
  },
  {
    id: 2,
    nombre: "Alebrije de zorro",
    detalle: "Alebrije de papel maché con forma de zorro",
    composicion: "Pasta de papel",
    categoria: "papel",
    medidas: "29x12x90cm",
    precio: 790,
    envio: 300,
    divisa: "MXN",
    stock: 12,
    img: [ articulos.art2_img1, articulos.art2_img2 ]
  },
];

export const getFetch = new Promise((resolve, rejected) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } else {
    rejected("400 Not found");
  }
});
