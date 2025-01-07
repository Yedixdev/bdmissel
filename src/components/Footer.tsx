import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black/80 backdrop-blur-sm border-t border-red-800/30 mt-20">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Contenedor principal - centrado con flex */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Logo y descripción */}
          <div className="w-full sm:w-[45%] lg:w-[20%] flex flex-col items-center text-center">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-display 
              bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              BDMissel
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-4">
              Transformando tu estilo con diseños únicos y personalizados.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="w-full sm:w-[45%] lg:w-[20%] flex flex-col items-center text-center">
            <h4 className="text-white font-display text-lg sm:text-xl mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Inicio', 'Colecciones', 'Sobre Nosotros'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="w-full sm:w-[45%] lg:w-[20%] flex flex-col items-center text-center">
            <h4 className="text-white font-display text-lg sm:text-xl mb-4">Contacto</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li>Email: info@bdmissel.com</li>
              <li>Tel: +57 123 456 7890</li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="w-full sm:w-[45%] lg:w-[20%] flex flex-col items-center text-center">
            <h4 className="text-white font-display text-lg sm:text-xl mb-4">Síguenos</h4>
            <div className="flex flex-col gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2">
                <FaInstagram  className="text-2xl " />
                <span className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2">
                <FaFacebook  className="text-2xl" />
                <span className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">Facebook</span>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2">
                <FaTiktok  className="text-2xl" />
                <span className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Línea separadora con gradiente */}
        <div className="h-px bg-gradient-to-r from-transparent via-red-800/30 to-transparent my-6 sm:my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} BDMissel. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-2 sm:space-x-4">
            <Link to="/privacy" className="hover:text-red-500 transition-colors duration-300">
              Política de Privacidad
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-red-500 transition-colors duration-300">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;