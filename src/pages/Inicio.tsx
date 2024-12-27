import Cara from "@/assets/img/cara.png";
import We from "@/assets/img/we.png";
import Header from "@/components/Header";
import SectionEnvio from "@/components/SectionEnvio";

const Inicio = () => {
  return (
    <div className="bg-black text-gray-50 min-h-screen w-[1500px] flex flex-col justify-center items-center relative">
      {/* Ajustamos el Header */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>
      
      <div className="relative z-10 text-center flex flex-col lg:justify-center mt-24 lg:mt-0 gap-5 text-white px-4 md:px-8">
        <h1 className="text-[55px] lg:text-[180px] lg:ml-3 ml-24 font-extrabold font-display leading-none">
          Bdmissel
        </h1>
        <p className="w-[700px] lg:flex ml-12 text-xl font-montserrat pt-4 hidden">
          Aquí no seguimos tendencias, las creamos. Personaliza tu ropa, lleva tu estilo y muestra al mundo lo que eres capaz de hacer.
        </p>
        <p className="font-display text-lg block lg:hidden w-52 ml-28">
          Vístete para impresionar, no para encajar
        </p>
        <div className="flex gap-5 lg:mt-8 lg:ml-10 ml-24 justify-center flex-wrap">
          <button className="w-56 h-12 lg:w-72 lg:h-14 lg:text-xl btn-bg-black text-white font-montserrat rounded-lg transition hover:text-black">
            Conéctate con Nosotros
          </button>
          <button className="w-56 h-12 lg:w-72 lg:h-14 lg:text-xl btn-bg-black text-white font-montserrat rounded-lg transition hover:text-black">
            Nuestras Colecciones
          </button>
        </div>
      </div>

      <div className="absolute top-14 left-[-150px] lg:left-[-100px] md:left-[-120px] z-10">
        <img
          src={Cara}
          alt="Cara"
          className="w-[350px] h-[350px] lg:w-[600px] lg:h-[600px]  rounded-full shadow-lg"
        />
      </div>

      <div className="absolute lg:top-16 top-[370px] lg:right-6 right-1 z-10  flex ">
        <img
          src={We}
          alt="Cara"
          width={400}
          height={400}
          className=""
        />
      </div>
      <SectionEnvio />
    </div>
  );
};

export default Inicio;
