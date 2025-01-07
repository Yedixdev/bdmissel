import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black/80 backdrop-blur-sm border-t border-red-800/30 mt-20 flex justify-center items-center">
      <div className="max-w-[1500px] mx-auto px-4 py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display 
              bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              BDMissel
            </h3>
            <p className="text-gray-400 text-sm">
              Transformando tu estilo con diseños únicos y personalizados.
              Rock, Anime, y más.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-white font-display mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Colecciones', 'Personalizar', 'Sobre Nosotros'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-display mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>WhatsApp: +57 123 456 7890</li>
              <li>Email: info@bdmissel.com</li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-white font-display mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea separadora con gradiente */}
        <div className="h-px bg-gradient-to-r from-transparent via-red-800/30 to-transparent my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} BDMissel. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
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