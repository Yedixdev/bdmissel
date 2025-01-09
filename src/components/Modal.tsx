import React from 'react';

interface Product {
  title: string;
  sizes?: string[];
  colors?: string[];
  details?: string;
  price?: number; // Agregar propiedad price, ya que la usas en el modal
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;  // Aquí pasamos el producto como prop
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  // Si el modal no está abierto o el producto es nulo, no renderiza nada
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white h-3/4 w-3/4 p-4 rounded-lg text-center relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-black text-lg font-bold hover:bg-red-900 p-2 rounded-full"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Detalles del Producto: {product.title}</h2>
        <p className="text-lg">Precio: ${product.price || 'No disponible'}</p>
        <p className="text-sm my-4">{product.details || 'Sin detalles disponibles'}</p>

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Colores disponibles:</h3>
          <ul className="flex gap-4 mt-2">
            {product.colors?.length ? (
              product.colors.map((color, index) => (
                <li key={index} className="p-2 rounded-full border bg-gray-200">{color}</li>
              ))
            ) : (
              <li className="p-2 rounded-full border bg-gray-200">No hay colores disponibles</li>
            )}
          </ul>

          <h3 className="text-lg font-semibold mt-4">Tallas disponibles:</h3>
          <ul className="flex gap-4 mt-2">
            {product.sizes?.length ? (
              product.sizes.map((size, index) => (
                <li key={index} className="p-2 rounded-full border bg-gray-200">{size}</li>
              ))
            ) : (
              <li className="p-2 rounded-full border bg-gray-200">No hay tallas disponibles</li>
            )}
          </ul>

          <div className="mt-4 flex justify-around">
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg">Agregar al carrito</button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg">Comprar ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
