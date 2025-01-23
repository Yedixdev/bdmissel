import React, { useState, useEffect } from 'react';
import Img from '../assets/img/anuncio.svg';

const AnnounceModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Close the modal and scroll to the top of the page
  const closeModal = () => {
    setIsOpen(false);
    window.scrollTo(0, 0); // Force scroll to the top
  };

  // Disable scroll when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto'; // Enable scroll
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
      <div className="relative bg-gray-200 w-[280px] lg:w-[650px] mt-10 lg:mt-5">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-xl font-bold text-black hover:text-red-800"
        >
          X
        </button>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <img src={Img} alt="Anuncio" className="w-[313px] h-[313px] lg:w-[380px] lg:h-[380px] object-object-cover" />
          <div className="flex flex-col items-center lg:items-start p-4 ">
            <h2 className="text-xl mb-2 lg:2xl text-center text-black font-semibold font-display">
              Tu estilo único, a tu medida
            </h2>
            <p className="text-gray-700 hidden lg:block text-center">
              En BDMissel, personalizamos cada prenda a tu gusto, ya sea con bordados o estampados, para que tengas un diseño exclusivo. Explora nuestra amplia variedad de colores y tallas, y si no encuentras lo que buscas, ¡nosotros lo conseguimos! Si tienes una idea en mente, podemos hacerla realidad. ¡Contáctanos por WhatsApp para más detalles y haz tu pedido hoy mismo!
            </p>
            <p className="text-gray-700 text-center text-sm block lg:hidden">
              En BDMissel, personalizamos cada prenda a tu gusto. Explora nuestra amplia variedad de diseños. Si tienes una idea en mente, podemos hacerla realidad ¡Contáctanos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceModal;
