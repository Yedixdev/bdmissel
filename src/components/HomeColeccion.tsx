import Yogger from '../assets/img/yogger.jpg';
import Sacos from '../assets/img/sacos.jpg';
import Buzos from '../assets/img/buzo.jpg';
import Camisas from '../assets/img/camisas.jpg';
import Pantalonetas from '../assets/img/pantalonetas.jpg';  
import Bordados from '../assets/img/bordados.jpg';
import Estampados from '../assets/img/estampados.jpg';
// import Camibuzos from '../assets/img/camibuzos.jpg';
import CamisasEsqueleto from '../assets/img/camisa-esqueleto.jpg';
import CamisasOversize from '../assets/img/camisa-oversize.jpg';
import YoggerOversize from '../assets/img/yogger-oversize.jpg';
import Sudaderas from '../assets/img/Suaderas.jpg';


interface SectionColection {
   image: string; 
   title: string;
}
const sectionColection : SectionColection[] = [
   {
      title: "Jogger Normal", 
      image: Yogger
   },
   {
      title: "Jogger Oversize", 
      image: YoggerOversize
   },
   {
      title: "Sacos",
      image: Sacos
   },
   {
      title: "Buzos", 
      image: Buzos
   },
   {
      title: "Camisas Basicas",
      image: Camisas
   },
   {
      title: "Camisas Esqueleto",
      image: CamisasEsqueleto
   },
   {
      title: "Camias Oversize",
      image: CamisasOversize
   },
   {
      title: "Camibuzos",
      image: "image1.jpg"
   },
   {
      title: "Pantalonetas",
      image: Pantalonetas
   },
   {
      title: "Bordados Perzonalizados",
      image: Bordados
   },
   {
      title: "Estampados Perzonalizados",
      image: Estampados
   },
   {
      title: "Sudadaderas",
      image: Sudaderas
   },
]

const SectionColeccion = () => {
  return (
    <div id='colecciones' className="w-full max-w-[1500px] mx-auto px-4">
      <h2 className="relative text-center mb-16">
        <span className="font-display text-4xl lg:text-7xl relative inline-block
          bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent
          drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Nuestras Colecciones
        </span>

        <span className="absolute -bottom-6 left-1/2 w-[50%] h-[2px]
          bg-gradient-to-r from-transparent via-red-600 to-transparent
          transform -translate-x-1/2"></span>
       
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8 ">
        {sectionColection.map((item, index) => (
          <div 
            key={index}
            className="relative w-[320px] h-[450px] lg:h-[600px] group rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105
            shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,0,0,0.4)]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"/>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-sm">
              <button className="px-8 py-4 rounded-lg border-2 border-white/30 bg-black/50 
              text-white font-montserrat text-lg uppercase tracking-wider
              transform -translate-y-10 group-hover:translate-y-0 transition-all duration-500
              hover:bg-white hover:text-black hover:border-white
              shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                Ver más
              </button>
            </div>

            <div className="absolute bottom-0 left-0 w-full font-montserrat p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
              <h3 className="text-white text-xl lg:text-2xl text-center tracking-wider transform group-hover:-translate-y-2 transition-transform duration-500
              ">
                {item.title}
              </h3>
              
              <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-red-600 via-red-800 to-red-600
              transform -translate-x-1/2 group-hover:w-1/2 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionColeccion;