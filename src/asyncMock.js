const products = [
  {
    id: "1",
    name: "iphone 12",
    price: 1600,
    category: "celular",
    img: "https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vQXBwbGUtaVBob25lLTEyLTY0R0ItQmx1ZS01Ry1GdWxseS1VbmxvY2tlZC1CLUdyYWRlLVVzZWQtQ2VsbHBob25lXzBkMDk1MWJjLTViNzgtNGRiYy05OTQ5LTNkOWJkMzE5MTE3Ni4wZGE3NWM0MjQzZmJlMjk0ZTNjM2UxOTg0NjU5MWMzZS5qcGVn.jpg",
    stock: 25,
    description: "El iPhone 12 es resistente a las salpicaduras, al agua y al polvo, y fue probado en condiciones de laboratorio controladas, con una clasificación IP68 según la norma IEC",
  },
  {
    id: "2",
    name: "samsung s21",
    price: 1200,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
    stock: 16,
    description: "El S21 y el S21+ tienen configuraciones de cámara similares a sus predecesores, pero se benefician de un software y procesamiento de imágenes mejorados. ",
  },
  {
    id: "3",
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
    stock: 6,
    description: "La pantalla LCD Retina IPS de 10,2 ofrece una visualización de altísima definición y un vidrio resistente a rayones . ",
  },
  {
    id: "4",
    name: "notebook",
    price: 1200,
    category: "computer",
    img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
    stock: 40,
    description: "La notebook es una computadora portátil que ya viene con pantalla, teclado, touchpad, que funciona como un ratón pero con el movimiento de los dedos.",
  },
  {
    id: "5",
    name: "Google Pixel",
    price: 600,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
    stock: 16,
    description: "Cambia de teléfono fácilmente. Y disfruta de un sinfín de opciones. Transfiere contactos, fotos, mensajes y más en unos 20 minutos. ",
  },
  {
    id: "6",
    name: "Motorola Razor",
    price: 800,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
    stock: 16,
    description: "es un teléfono inteligente de gama media con SO Android, diseñado por Motorola que se anunció el 18 de octubre de 2011 en la ciudad de Nueva York. ",
  },
  {
    id: "7",
    name: "Galaxies Tab",
    price: 1500,
    category: "tablet",
    img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
    stock: 40,
    description: "Samsung Galaxy Tab es una línea de tabletas basadas en Android y Windows producidas por Samsung Electronics. ",
  },
  {
    id: "8",
    name: "Ipad Mini",
    price: 500,
    category: "tablet",
    img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
    stock: 30,
    description: "iPad Mini es un dispositivo tipo tableta de la compañía estadounidense Apple Inc.",
  },
  {
    id: "9",
    name: "Laptop",
    price: 1100,
    category: "computer",
    img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
    stock: 10,
    description: "Un computador portátil o laptop es un equipo personal que puede ser transportado fácilmente. ",
  },
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2500);
  });
};


export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 2500);
  });
};


export const getProductByID = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 2500);
  });
};