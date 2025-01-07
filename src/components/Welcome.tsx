import Cara from "@/assets/img/cara.png";
import We from "@/assets/img/we.png";

const Welcome = () => {
  return (
    <main className="relative z-10 text-center flex flex-col items-center w-full px-4 md:px-8 mt-20 lg:mt-20">
      <h1 className="text-6xl sm:text-9xl lg:text-[180px] font-extrabold font-display leading-tight relative z-10  lg:mt-10 ml-20">
        Bdmissel
      </h1> 
      <p className="w-44 lg:w-[750px] text-base lg:text-2xl font-montserrat  my-5 relative z-10 ml-24">
        Aquí no seguimos tendencias, las creamos. Personaliza tu ropa, lleva tu estilo y muestra al mundo lo que eres capaz de hacer.
      </p>
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