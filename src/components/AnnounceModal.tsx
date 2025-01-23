import React, { useState } from 'react';
import Img from '../assets/img/anuncio.svg';

const AnnounceModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false); 
  };

  if (!isOpen) return null; 
  return (
    <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
      <div className="relative bg-gray-200 w-[300px] lg:w-[650px]  mt-10 lg:mt-5 ">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-xl font-bold text-black hover:text-red-800"
        >
          X
        </button>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <img src={Img} alt="Anuncio" className="w-[] lg:w-[330px]" />
          <div className="flex flex-col items-center lg:items-start p-4 mt-0 lg:mt-3 gap-5">
            <h2 className="text-2xl text-center text-black font-semibold font-display">
              Tu estilo único, a tu medida
            </h2>
            <p className="text-gray-700 hidden lg:block text-center ">
              En BDMissel, personalizamos cada prenda a tu gusto, ya sea con bordados o estampados, para que tengas un diseño exclusivo. Explora nuestra amplia variedad de colores y tallas, y si no encuentras lo que buscas, ¡nosotros lo conseguimos! Si tienes una idea en mente, podemos hacerla realidad. ¡Contáctanos por WhatsApp para más detalles y haz tu pedido hoy mismo!
            </p>
            <p className="text-gray-700 text-center block lg:hidden">
              En BDMissel, personalizamos cada prenda a tu gusto, ya sea con bordados o estampados. Explora nuestra amplia variedad de colores y tallas. Si tienes una idea en mente, podemos hacerla realidad. ¡Contáctanos por WhatsApp para más detalles!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceModal;
