import { v4 as uuidv4 } from 'uuid';

//Camisas Oversize
import Oversize1 from "@/assets/img/product/Oversize-1.png";
import Oversize2 from "@/assets/img/product/Oversize-2.png";
import Oversize3 from "@/assets/img/product/Oversize-3.png";
import Oversize4 from "@/assets/img/product/Oversize-4.png";
import Oversize5 from "@/assets/img/product/Oversize-5.png";
import OversizeColors from "@/assets/img/product/Oversize-colors.png";

//Camisas Basicas
import Camisas1 from "@/assets/img/product/Camisa-1.png";
import Camisas2 from "@/assets/img/product/Camisa-2.png";
import Camisas3 from "@/assets/img/product/Camisa-3.png";
import Camisas4 from "@/assets/img/product/Camisa-4.png";
import CamisasColors from "@/assets/img/product/Camisa-colors.png";

//Sacos
import Sacos1 from "@/assets/img/product/Sacos-1.png";
import Sacos2 from "@/assets/img/product/Sacos-2.png";
import Sacos3 from "@/assets/img/product/Sacos-3.png";
import Sacos4 from "@/assets/img/product/Sacos-4.png";
import Sacos5 from "@/assets/img/product/Sacos-5.png";
import Sacos6 from "@/assets/img/product/Sacos-6.png";
import SacosColors from "@/assets/img/product/Sacos-colors.png";

//Sudaderas
import Sudaderas1 from "@/assets/img/product/Sudaderas-1.png";
import Sudaderas2 from "@/assets/img/product/Sudaderas-2.png";
import Sudaderas3 from "@/assets/img/product/Sudaderas-3.png";

//Jogger Oversize
import Jogger1 from "@/assets/img/product/Jogger-1.png";
import Jogger2 from "@/assets/img/product/Jogger-2.png";
import Jogger3 from "@/assets/img/product/Jogger-3.png";
import Jogger4 from "@/assets/img/product/Jogger-4.png";
import Jogger5 from "@/assets/img/product/Jogger-5.png";
import Jogger6 from "@/assets/img/product/Jogger-6.png";
import Jogger7 from "@/assets/img/product/Jogger-7.png";

//Pantalonetas
import Pantalonetas1 from "@/assets/img/product/Pantalonetas-1.png";
import Pantalonetas2 from "@/assets/img/product/Pantalonetas-2.png";

// //Buzos
import Buzos1 from "@/assets/img/product/Buzos-1.png";
import Buzos2 from "@/assets/img/product/Buzos-2.png";
import Buzos3 from "@/assets/img/product/Buzos-3.png";

// //Camisas Esqueleto
import Esqueleto1 from "@/assets/img/product/Esqueleto-1.png";
import Esqueleto2 from "@/assets/img/product/Esqueleto-2.png";

// //Gorras
import Gorras1 from "../assets/img/product/Gorra-1.png";

// //Bordados Personalizados
import Bordados1 from "@/assets/img/product/Bordados-1.png";
import Bordados2 from "@/assets/img/product/Bordados-2.png";
import Bordados3 from "@/assets/img/product/Bordados-3.png";
import Bordados4 from "@/assets/img/product/Bordados-4.png";
import Bordados5 from "@/assets/img/product/Bordados-5.png";
import Bordados6 from "@/assets/img/product/Bordados-6.png";
import Bordados7 from "@/assets/img/product/Bordados-7.png";
import Bordados8 from "@/assets/img/product/Bordados-8.png";

// //Estampados Personalizados
import Estampados1 from "@/assets/img/product/Estampados-1.png";
import Estampados2 from "@/assets/img/product/Estampados-2.png";
import Estampados3 from "@/assets/img/product/Estampados-3.png";
import Estampados4 from "@/assets/img/product/Estampados-4.png";
import Estampados5 from "@/assets/img/product/Estampados-5.png";
import Estampados6 from "@/assets/img/product/Estampados-6.png";
import Estampados7 from "@/assets/img/product/Estampados-7.png";

export const productDetails = [

  {
    id: uuidv4(), 
    title: "Camisas Oversize",
    price: 55000,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Blanco", "Gris", "Beige", "Otro"],
    details: "Camisa oversize, perfecta para ti. Además, son 100% personalizables, ya sea estampadas o bordadas. Solo envíanos tu diseño y crearemos la prenda de tus sueños.",
    images: [
      Oversize1,
      Oversize2,
      Oversize3,
      Oversize4,
      Oversize5,
      OversizeColors
    ]
  },
  {
    id: uuidv4(),
    title: "Camisas Basicas",
    price: 44000,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Blanco", "Gris", "Beige", "Otro"],
    details: "Camisa básica de algodón, perfecta para cualquier ocasión. Comodidad y estilo a la vez 100% personalizables, ya sea estampadas o bordadas. Solo envíanos tu diseño y crearemos la prenda de tus sueños.",
    images: [
      Camisas1,
      Camisas2,
      Camisas3,
      Camisas4,
      CamisasColors
    ]
  },
  {
    id: uuidv4(),
    title: "Sacos",
    price: 89000,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Blanco", "Gris", "Beige", "Otro"],
    details: "Saco elegante para ocasiones formales o de negocio. Con un corte moderno y tela premium,  son 100% personalizables, ya sea estampadas o bordadas. Solo envíanos tu diseño y crearemos la prenda de tus sueños.",
    images: [
      Sacos1,
      Sacos2,
      Sacos3,
      Sacos4,
      Sacos5,
      Sacos6,
      SacosColors
    ]
  },
  {
    id: uuidv4(),
    title: "Sudaderas",
    price: 60000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Blanco", "Gris"],
    details: "Sudadera cómoda y de alta calidad,  son 100% personalizables, ya sea estampadas o bordadas. Solo envíanos tu diseño y crearemos la prenda de tus sueños.",
    images: [
      Sudaderas1,
      Sudaderas2,
      Sudaderas3
    ]
  },
  {
    id: uuidv4(),
    title: "Jogger Oversize",
    price: 95000,
    sizes: ["M", "L", "XL"],
    colors: ["Negro", "Blanco", "Gris"],
    details: "Jogger oversize para mayor comodidad y estilo. Perfecto para actividades casuales o deportivas.",
    images: [
      Jogger1,
      Jogger2,
      Jogger3,
      Jogger4,
      Jogger5,
      Jogger6,
      Jogger7,
    ]
  },
  {
    id: uuidv4(),
    title: "Pantalonetas",
    price: 20000,
    sizes: ["S", "M", "L"],
    colors: ["Negro", "Gris", "Otro"],
    details: "Pantalonetas ligeras para el verano, cómodas y perfectas para el calor. Con bolsillos laterales.",
    images: [
      Pantalonetas1,
      Pantalonetas2
    ]
  },
  {
    id: uuidv4(),
    title: "Buzos",
    price: 70000,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Blanco", "Gris", "Beige", "Otro"],
    details: "Buzo de alta calidad con un diseño simple y elegante. Ideal para mantener el calor en invierno.",
    images: [
      Buzos1,
      Buzos2,
      Buzos3
    ]
  },
  {
    id: uuidv4(),
    title: "Camisas Esqueleto",
    price: 39000,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Blanco", "Gris", "Beige", "Otro"],
    details: "Camisa con diseño de esqueleto impreso, ideal para ocasiones informales o eventos temáticos.",
    images: [
      Esqueleto1,
      Esqueleto2
    ]
  },
  {
    id: uuidv4(),
    title: "Gorras",
    price: 35000,
    sizes: ["Ajustable"],
    colors: ["Negro", "Gris", "Blanco"],
    details: "Gorra ajustable para cualquier ocasión, ideal para el verano y el calor.",
    images: [
      Gorras1,
    ]
    },
  {
    id: uuidv4(),
    title: "Bordados Personalizados",
    price: 40000,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Blanco", "Gris", "Otro"],
    details: "Camisas o prendas personalizadas con bordados a tu elección. Hazlas únicas con tu estilo.",
    images: [
      Bordados1,
      Bordados2,
      Bordados3,
      Bordados4,
      Bordados5,
      Bordados6,
      Bordados7,
      Bordados8
    ]
  },
  {
    id: uuidv4(),
    title: "Estampados Personalizados",
    price: 35.00,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Negro", "Blanco", "Gris", "Otro"],
    details: "Camisetas con estampados personalizados, ideales para eventos, marcas o para tu estilo único.",
    images: [
      Estampados1,
      Estampados2,
      Estampados3,
      Estampados4,
      Estampados5,
      Estampados6,
      Estampados7
    ]
  }
];