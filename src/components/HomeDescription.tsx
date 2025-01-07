const HomeDescription = () => {
  return (
    <div className="w-full max-w-[1500px] mx-auto py-20 px-4">
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
            En <span className="text-red-500 font-semibold">BDMissel</span>, transformamos tus ideas en prendas únicas que cuentan tu historia.
            Ya sea que te inspire el mundo del anime, el rock, o quieras lucir un estilo galáctico,
            estamos aquí para hacer realidad tu visión.
          </p>

          <div className="pt-8">
            <p className="text-xl lg:text-2xl font-display text-white/90 italic">
              "Porque tu ropa debe ser tan única como tú"
            </p>
          </div>

          {/* Badges o etiquetas de estilos */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {['Otaku', 'Rock', 'Anime', 'Metal', 'Cyberpunk', 'Galáctico'].map((style) => (
              <span key={style} 
                className="px-4 py-2 rounded-full text-sm 
                bg-black/50 border border-red-800/30
                text-white/80 font-montserrat tracking-wider">
                {style}
              </span>
            ))}
          </div>
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