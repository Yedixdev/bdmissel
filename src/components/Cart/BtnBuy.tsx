import React, { useState } from "react";
import { useCart } from "./CartContext"; // Importar el contexto del carrito

interface ProductBuyProps {
  product: {
    id: string;
    title: string;
    colors: string[];
    sizes: string[];
    price: number;
  };
}

const ProductBuy: React.FC<ProductBuyProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart(); // Usar la función para agregar al carrito

  const whatsappNumber = "+573146757244";

  const isFormComplete = selectedColor && selectedSize;

  const generateMessage = () => {
    const baseMessage = `Hola BDMissel, me interesa la siguiente prenda:\n\n- Producto: ${product.title}`;
    const details = `\n- Talla: ${selectedSize}\n- Color: ${selectedColor}\n- Precio: $${product.price}`;
    const closingMessage = `\n\nMe gustaría obtener más información y asesoramiento sobre este producto.`;
    return encodeURIComponent(`${baseMessage}${details}${closingMessage}`);
  };

  const handleAddToCart = () => {
    if (!isFormComplete) {
      alert("Por favor, selecciona un color y una talla antes de agregar al carrito.");
      return;
    }

    const newItem = {
      id: product.id,
      name: product.title,
      color: selectedColor!,
      size: selectedSize!,
      price: product.price,
      quantity: 1
    };

    addToCart(newItem); // Agregar el producto al carrito global
    alert("Producto agregado al carrito.");
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-start items-start flex-col gap-3">
        <h3 className="font-semibold">Selecciona un color:</h3>
        <ul className="flex flex-wrap gap-2">
          {product.colors.map((color, index) => (
            <li
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`cursor-pointer px-4 py-2 border ${
                selectedColor === color
                  ? "border-red-600 bg-red-900 text-red-100"
                  : "border-red-800 text-gray-200 hover:border-gray-500"
              } transition-all`}
            >
              {color}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-start items-start flex-col gap-2">
        <h3 className="font-semibold">Selecciona una talla:</h3>
        <ul className="flex flex-wrap gap-2">
          {product.sizes.map((size, index) => (
            <li
              key={index}
              onClick={() => setSelectedSize(size)}
              className={`cursor-pointer px-4 py-2 border ${
                selectedSize === size
                  ? "border-red-600 bg-red-900 text-red-100"
                  : "border-red-800 text-gray-200 hover:border-gray-500"
              } transition-all`}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${generateMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-3 text-white font-bold rounded-lg text-center ${
            isFormComplete
              ? "border border-red-600/30 bg-gradient-to-r from-black via-red-950 to-black hover:bg-gradient-to-l hover:from-red-500 hover:via-red-700 hover:to-red-500"
              : "border border-red-600/30 bg-gradient-to-r from-black via-red-950 to-black/50 cursor-not-allowed"
          } transition-all`}
        >
          Comprar Ahora
        </a>

        <button
          onClick={handleAddToCart}
          className="px-6 py-3 border border-red-600/30 bg-gradient-to-r from-black via-red-950 to-black  hover:bg-gradient-to-l hover:from-red-500 hover:via-red-700 hover:to-red-500  text-white font-bold rounded-lg transition-all"
        >
          Agregar al Carrito
        </button>
      </div>

    </div>
  );
};

export default ProductBuy;
