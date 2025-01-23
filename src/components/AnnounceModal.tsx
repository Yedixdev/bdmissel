import React, { useState } from 'react';
import Img from '../assets/img/anuncio.png';

const AnnounceModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Estado para controlar la visibilidad del modal

  const closeModal = () => {
    setIsOpen(false); // Cierra el modal al actualizar el estado
  };

  if (!isOpen) return null; // Si el modal está cerrado, no renderiza nada

  return (
    <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
      <div className="relative bg-gray-200 w-[380px] lg:w-[650px]  mt-10 lg:mt-5 p-4 rounded-lg">
        {/* Botón para cerrar el modal */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
        >
          X
        </button>

        {/* Contenido del modal */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          {/* Imagen */}
          <img src={Img} alt="Anuncio" className="w-72 lg:w-80" />

          {/* Texto */}
          <div className="flex flex-col items-center lg:items-start p-4 mt-0 lg:mt-3 gap-5">
            <h2 className="text-2xl text-center lg:text-left text-black font-semibold font-display">
              Tu estilo único, a tu medida
            </h2>

            {/* Texto para pantallas grandes */}
            <p className="text-gray-700 hidden lg:block text-center lg:text-left">
              En BDMissel, personalizamos cada prenda a tu gusto, ya sea con bordados o estampados, para que tengas un diseño exclusivo. Explora nuestra amplia variedad de colores y tallas, y si no encuentras lo que buscas, ¡nosotros lo conseguimos! Si tienes una idea en mente, podemos hacerla realidad. ¡Contáctanos por WhatsApp para más detalles y haz tu pedido hoy mismo!
            </p>

            {/* Texto para pantallas pequeñas */}
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
