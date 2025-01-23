const HomeDescription = () => {
  return (
    <div className="w-full max-w-[1500px] mx-auto py-5 px-4">
      {/* Contenedor principal con efecto de fondo */}
      <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm 
        border border-red-800/30 p-8 lg:p-12
        shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.2)]">
        
        {/* Líneas decorativas estilo cyber */}
        <div className="absolute top-0 left-0 w-32 h-32">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600/50 to-transparent"></div>
          <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-red-600/50 to-transparent"></div>
        </div>

        {/* Contenido principal */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-5xl font-display mb-8 
            bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent
            drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Tu Estilo, Tu Historia
          </h2>

          <p className="text-lg lg:text-xl font-montserrat text-gray-300 leading-relaxed">
            En <span className="text-red-600 font-semibold">BDMissel</span>, Todos nuestros productos y prendas son completamente personalizables, ya sea con bordados o estampados según tus preferencias. Además de los diseños disponibles, podemos crear el diseño que desees. Contamos con una amplia gama de colores y tallas, y si no lo tenemos, lo conseguimos. ¡Comunícate con nosotros a través de <span className="font-semibold text-red-600">WhatsApp</span> para más detalles!
          </p>
        </div>

        {/* Líneas decorativas esquina opuesta */}
        <div className="absolute bottom-0 right-0 w-32 h-32 transform rotate-180">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600/50 to-transparent"></div>
          <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-red-600/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeDescription;