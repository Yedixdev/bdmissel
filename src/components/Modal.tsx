import React, { useState } from 'react';

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
      <div className="relative flex flex-col md:flex-row bg-black/95 h-[100vh] md:h-[85vh] w-full md:w-[85vw] p-4 md:p-8 text-center border border-red-800/30 group shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 hover:border-red-600/50">
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-600/30 group-hover:border-red-600/50 transition-colors duration-300"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-600/30 group-hover:border-red-600/50 transition-colors duration-300"></div>
        
        {/* Carrusel personalizado */}
        <div className='w-full md:w-1/2 h-[400px] md:h-auto bg-black relative'>
          {product.images && product.images.length > 0 ? (
            <>
              <div className="relative w-full h-[400px] md:h-[70vh]">
                <img 
                  src={product.images[currentImage]} 
                  alt={`${product.title} - imagen ${currentImage + 1}`}
                  className="w-full h-full object-contain"
                />
                
                {/* Botones de navegación */}
                <button 
                  onClick={prevImage}
                  className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center border border-red-600/30 hover:border-red-600/50 text-red-500 hover:text-red-400 transition-all duration-300 bg-black/50 hover:bg-black/70"
                >
                  ←
                </button>
                <button 
                  onClick={nextImage}
                  className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10  items-center justify-center border border-red-600/30 hover:border-red-600/50 text-red-500 hover:text-red-400 transition-all duration-300 bg-black/50 hover:bg-black/70"
                >
                  →
                </button>
              </div>
              
              {/* Miniaturas */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-12 h-12 border-2 ${
                      currentImage === index 
                        ? 'border-red-600' 
                        : 'border-red-600/30'
                    } hover:border-red-600 transition-colors duration-300`}
                  >
                    <img 
                      src={image} 
                      alt={`thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No hay imágenes disponibles
            </div>
          )}
        </div>
        
        {/* Resto del contenido del modal */}
        <div className='flex flex-col justify-start items-start md:ml-8 mt-4 md:mt-0 w-full md:w-1/2'>
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-red-600/30 hover:border-red-600/50 text-red-500 hover:text-red-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(220,38,38,0.3)]"
          >
            ✕
          </button>
          
          <h2 className="text-2xl lg:text-5xl font-display tracking-wider text-white mb-2 border-b-[1px] border-red-700/30 pb-2">
            {product.title}
          </h2>

          <p className="text-gray-200 font-montserrat my-2 text-left">{product.details}</p>
          <p className='text-white text-3xl bg-red-600/30 rounded-sm p-2 font-montserrat'>{product.price} COP</p>
          
          {/* Sección de colores */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="w-full">
              <h3 className="text-lg font-semibold text-white mb-3 text-left">Colores disponibles:</h3>
              <ul className="flex flex-wrap gap-4 justify-start items-start">
                {product.colors?.length ? (
                  product.colors.map((color, index) => (
                    <li key={index} className="px-4 py-2 border border-red-600/30 
                      text-gray-300 hover:border-red-600/50 hover:text-white
                      transition-all duration-300
                      hover:shadow-[0_0_10px_rgba(220,38,38,0.2)]">
                      {color}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 border border-red-600/30 text-gray-400">
                    No disponible
                  </li>
                )}
              </ul>
            </div>

            {/* Sección de tallas */}
            <div className="w-full">
              <h3 className="text-lg font-semibold text-white mb-3 text-left">Tallas disponibles:</h3>
              <ul className="flex flex-wrap gap-4 justify-start items-start">
                {product.sizes?.length ? (
                  product.sizes.map((size, index) => (
                    <li key={index} className="px-4 py-2 border border-red-600/30 
                      text-gray-300 hover:border-red-600/50 hover:text-white
                      transition-all duration-300
                      hover:shadow-[0_0_10px_rgba(220,38,38,0.2)]">
                      {size}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 border border-red-600/30 text-gray-400">
                    No disponible
                  </li>
                )}
              </ul>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full mt-4">
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-red-900/80 via-red-600/80 to-red-900/80 border border-red-700/50 text-white hover:border-red-400 transition-all duration-300 shadow-lg hover:shadow-red-500/30">
                Agregar al carrito
              </button>

              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-900/80 via-green-600/80 to-green-900/80 border border-green-500/50 text-white hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-green-600/30">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;