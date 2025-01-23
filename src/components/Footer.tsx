import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const whatsappNumber = "+573146757244";
  const message = "Hola, visité tu página de BDMiseel y estoy interesado en obtener asesoramiento sobre la personalización y bordados. ¿Podrías brindarme más información sobre tus productos y cómo realizar un pedido?";
  const encodedMessage = encodeURIComponent(message);
  
  return (
    <footer className="w-full bg-black/80 backdrop-blur-sm border-t border-red-800/30 ">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="w-full sm:w-[45%] lg:w-[20%] flex flex-col items-center text-center">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-display 
              bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              BDMissel
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-4">
              Transformando tu estilo con diseños únicos y personalizados.
            </p>
          </div>
          <div className="w-full sm:w-[45%] lg:w-[20%] flex flex-col items-center text-center">
            <h4 className="text-white font-display text-lg sm:text-xl mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3 flex flex-col gap-1">
            <RouterLink to="/" className="text-gray-400 hover:text-red-500">
              Inicio
            </RouterLink>
            <ScrollLink
              to="nosotros"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-400 hover:text-red-500"
            >
              Colecciones
            </ScrollLink>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base cursor-pointer "
               >
                Conactanos
              </a>
            </ul>
          </div>
          <div className="w-full sm:w-[45%] lg:w-[20%] flex flex-col items-center text-center">
            <h4 className="text-white font-display text-lg sm:text-xl mb-4">Contacto</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li>Email: info@bdmissel.com</li>
              <li>Tel: +57 314 675 7244</li>
              <li>Colombia, Uraba - Antioquia</li>
            </ul>
          </div>
          <div className="w-full sm:w-[45%] lg:w-[20%] flex flex-col items-center text-center">
            <h4 className="text-white font-display text-lg sm:text-xl mb-4">Síguenos</h4>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/bdmissel/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2">
                <FaInstagram  className="text-2xl " />
                <span className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2">
                <FaFacebook  className="text-2xl" />
                <span className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">Facebook</span>
              </a>
              <a href="https://www.tiktok.com/@bdmissel" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2">
                <FaTiktok  className="text-2xl" />
                <span className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-red-800/30 to-transparent my-6 sm:my-8" />

        <div className="text-center text-gray-500 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} BDMissel. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-2 sm:space-x-4">
            <RouterLink to="/politica&privacidad" className="hover:text-red-500 transition-colors duration-300">
              Política de Privacidad
            </RouterLink>
            <span>|</span>
            <RouterLink to="/terminos&condiciones" className="hover:text-red-500 transition-colors duration-300">
              Términos y Condiciones
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;