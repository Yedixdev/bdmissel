import { useState } from 'react';
import Sacos from '../../assets/img/sacos.jpg';
import Buzos from '../../assets/img/buzo.jpg';
import Camisas from '../../assets/img/camisas.jpg';
import Pantalonetas from '../../assets/img/pantalonetas.jpg';
import Bordados from '../../assets/img/bordados.jpg';
import Gorras from '../../assets/img/Gorra.png';
import Estampados from '../../assets/img/estampados.jpg';
import CamisasEsqueleto from '../../assets/img/camisa-esqueleto.jpg';
import CamisasOversize from '../../assets/img/camisa-oversize.jpg';
import YoggerOversize from '../../assets/img/yogger-oversize.jpg';
import Sudaderas from '../../assets/img/Suaderas.jpg';
import Pagination from './Pagination';
import Modal from '../Modal';
import { productDetails } from '../../data/productDetails';

interface SectionColection {
  image: string;
  title: string;
}

const sectionColection: SectionColection[] = [
  { title: "Camisas Oversize", image: CamisasOversize },
  { title: "Camisas Basicas", image: Camisas },
  { title: "Sacos", image: Sacos },
  { title: "Sudaderas", image: Sudaderas },
  { title: "Jogger Oversize", image: YoggerOversize },
  { title: "Pantalonetas", image: Pantalonetas },
  { title: "Buzos", image: Buzos },
  { title: "Camisas Esqueleto", image: CamisasEsqueleto },
  { title: "Gorras", image: Gorras },
  { title: "Bordados Personalizados", image: Bordados },
  { title: "Estampados Personalizados", image: Estampados },

];

const SectionColeccion = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(sectionColection.length / itemsPerPage);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<SectionColection | null>(null);

  const getPaginatedItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sectionColection.slice(startIndex, startIndex + itemsPerPage);
  };

  const openModal = (title: string, image: string) => {
    const product = productDetails.find(item => item.title === title);
    if (product) {
      setSelectedProduct({ ...product, image });  
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

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
      <div className="flex flex-wrap justify-center gap-8">
        {getPaginatedItems().map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item.title, item.image)}  // Modificar aquí para pasar la imagen
            className="relative w-[320px] h-[450px] lg:h-[500px] group overflow-hidden transform transition-all duration-500 hover:scale-105
              shadow-lg hover:shadow-red-600/30"
          >
            <div className="relative h-full w-full bg-black overflow-hidden border-[1px] border-red-600/30">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 w-full font-montserrat p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                <h3 className="text-white text-xl lg:text-2xl text-center font-display tracking-wider mb-4">
                  {item.title}
                </h3>
                <div className="flex justify-center transform transition-all duration-500">
                  <button
                    onClick={() => openModal(item.title, item.image)}  // Modificar aquí también
                    className="relative px-8 py-3 rounded-lg 
                    bg-gradient-to-r from-red-900/80 via-red-600/80 to-red-900/80
                    border border-red-500/50 
                    text-white font-montserrat text-sm uppercase tracking-[0.2em]
                    hover:tracking-[0.3em]
                    hover:border-red-400
                    transition-all duration-500
                    shadow-[0_0_15px_rgba(220,38,38,0.3)] 
                    hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                    <span className="relative z-10 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text
                      group-hover:text-white transition-colors duration-500">
                      Ver más
                    </span>
                  </button>
                </div>
                <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-red-600 via-red-800 to-red-600
                  transform -translate-x-1/2 group-hover:w-52 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {isModalOpen && selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default SectionColeccion;
