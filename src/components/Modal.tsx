import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
interface Product {
  title: string;
  sizes?: string[];
  colors?: string[];
  details?: string;
  price?: number;
  images?: string[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!isOpen || !product) return null;

  const nextImage = () => {
    if (product.images) {
      setCurrentImage((prev) => 
        prev === product.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (product.images) {
      setCurrentImage((prev) => 
        prev === 0 ? product.images!.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative flex flex-col md:flex-row bg-black text-white w-full md:w-[85vw] max-w-[900px] overflow-y-auto px-4 py-4 md:py-8 text-center border border-red-800/30 group shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 hover:border-red-600/50">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-black relative flex items-center justify-center">
          {product.images && product.images.length > 0 ? (
            <>
              <img 
                src={product.images[currentImage]} 
                alt={`${product.title} - imagen ${currentImage + 1}`}
                className="w-full h-full object-contain px-10"
              />
              <button 
                onClick={prevImage}
                className="flex absolute left-[-6px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center border border-red-600/30 hover:border-red-600/50 text-red-500 hover:text-red-400 transition-all duration-300 bg-black/50 hover:bg-black/70"
              >
                <MdOutlineKeyboardArrowLeft className='hover:text-red-700'/>
              </button>
              <button 
                onClick={nextImage}
                className="flex absolute right-[-6px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center border border-red-600/30 hover:border-red-600/50 text-red-500 hover:text-red-400 transition-all duration-300 bg-black/50 hover:bg-black/70"
              >
                <MdOutlineKeyboardArrowRight className='hover:text-red-700'/>
              </button>
            </>
          ) : (
            <div className="text-gray-400">No hay imágenes disponibles</div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-start items-start md:ml-8 mt-4 md:mt-0 w-full md:w-1/2">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-red-600/30 hover:border-red-600/50 text-red-500 hover:text-red-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(220,38,38,0.3)]"
          >
            ✕
          </button>

          <h2 className="text-2xl lg:text-3xl font-display tracking-wider mb-2 border-b-[1px] border-red-700/30 pb-2">
            {product.title}
          </h2>

          <p className="text-gray-200 my-2 hidden lg:flex text-left">{product.details}</p>
          <p className="text-xl bg-red-600/30 rounded-sm p-2">Precio: {product.price} COP</p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
            <button 
              className="w-full sm:w-auto px-6 py-3 bg-red-600/80 text-white hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;