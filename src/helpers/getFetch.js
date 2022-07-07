let productos = [
  {
    id: 1,
    nombre: "Alebrije de león",
    detalle: "Alebrije con figura tallada de león",
    composicion: "Madera",
    medidas: "24x19x90cm",
    precio: 390,
    divisa: "MXN",
    src: "../static/images/products/articulo1_leon_1.png"
  },
  {
    id: 2,
    nombre: "Alebrije de zorro",
    detalle: "Alebrije con figura tallada de zorro",
    composicion: "Madera",
    medidas: "29x12x90cm",
    precio: 790,
    divisa: "MXN",
    src: "../static/images/products/articulo2_zorro_1.png"
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
