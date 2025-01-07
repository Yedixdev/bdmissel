import Cara from "@/assets/img/cara.png";
import We from "@/assets/img/we.png";

const Welcome = () => {
  return (
    <main className="relative z-10 text-center flex flex-col items-center w-full px-4 md:px-8 mt-20 lg:mt-20">
      <h1 className="text-6xl sm:text-9xl lg:text-[180px] font-extrabold font-display leading-tight relative z-10 lg:mt-10 ml-20">
        Bdmissel
      </h1>
      <p className="max-w-2xl lg:flex hidden text-xl font-montserrat pt-4">
        Aquí no seguimos tendencias, las creamos. Personaliza tu ropa, lleva tu estilo y muestra al mundo lo que eres capaz de hacer.
      </p>
      <p className="w-56 font-display text-lg lg:hidden ml-[100px]">
        Vístete para impresionar, no para encajar
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-5 w-full max-w-2xl justify-center relative z-10">
        <button className="w-60 lg:w-full ml-28  lg:ml-0 px-8 py-3 lg:text-xl text-white font-montserrat rounded-lg bg-black
          border border-red-800/30 hover:border-red-600/50
          transition-all duration-300 hover:scale-105
          shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]">
          Conactanos
        </button>
        
        <button className="w-60 lg:w-full ml-28  lg:ml-0 px-8 py-3 lg:text-xl text-white font-montserrat rounded-lg
          border border-red-800/30 hover:border-red-600/50 bg-black
          transition-all duration-300 hover:scale-105
          shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]">
          Nuestras Colecciones
        </button>
      </div>

      {/* Imágenes decorativas */}
      <div className="absolute left-[-100px] top-[-40px] lg:top-[-16px] -translate-x-1/4 lg:translate-x-0 lg:left-[-100px]">
        <img
          src={Cara}
          alt="Imagen decorativa de una cara"
          className="w-[450px] h-[450px] sm:w-[350px] sm:h-[350px] lg:w-[580px] lg:h-[550px] 
          rounded-full  object-cover
          border-2 border-red-800/20 hover:border-red-600/30 
          transition-all duration-300
          shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.15)]"
          loading="lazy"
        />
      </div>
      <div className="absolute right-0 z-10 mt-[280px] lg:mt-0 mr-3 lg:mr-0">
        <img
          src={We}
          alt="Imagen decorativa grupal"
          className="w-[250px] sm:w-[300px] lg:w-[320px] h-auto object-contain
          drop-shadow-[0_0_15px_rgba(220,38,38,0.1)]
          transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
    </main>
  );
};

export default Welcome;