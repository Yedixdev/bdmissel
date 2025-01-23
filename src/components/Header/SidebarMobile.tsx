import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { name: "Colecciones", to: "coleccion" },
    { name: "Nosotros", to: "nosotros" },
  ];

  return (
    <div>
        <div
            onClick={onClose}
            className={`
                fixed inset-0 bg-black/50 backdrop-blur-sm
                transition-opacity duration-300 ease-in-out
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                z-40
            `}
            role="button"
            aria-label="Cerrar menú móvil"
            tabIndex={0}
        />
        <aside
            className={`
                fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-800
                shadow-xl border-l border-red-800 
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                z-50
            `}
            aria-hidden={!isOpen}
        >
            <div className="p-6 flex justify-between items-center border-b border-red-800 lg:w-96 bg-gradient-to-r from-black via-zinc-950 to-black z-50 transform border-l border-red-800/30 group shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 ">
                <h2 className="text-2xl font-display text-gray-100">
                    Menú
                </h2>
                <button
                    onClick={onClose}
                    className="text-red-700 text-3xl hover:text-red-500 transition-colors"
                    aria-label="Cerrar menú móvil"
                >
                    <VscChromeClose />
                </button>
            </div>
            <nav className="h-full p-6 space-y-4 bg-red-400 lg:w-96 bg-gradient-to-r from-black via-zinc-950 to-black z-50 transform border-l border-red-800/30 group shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300">
                <RouterLink 
                    to="/" 
                    className="block px-6 py-3 rounded-md text-center bg-gradient-to-r from-red-900/80 via-red-600/80 to-red-900/80
                    border border-red-500/50 
                    text-white font-montserrat text-sm uppercase tracking-[0.2em]
                    hover:tracking-[0.3em]
                    hover:border-red-400
                    transition-all duration-500
                    shadow-[0_0_15px_rgba(220,38,38,0.3)] 
                    hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
                >
                    Inicio
                </RouterLink>
                {navItems.map((item) => (
                    <ScrollLink
                        key={item.to}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        onClick={onClose}
                        className="block px-6 py-3 rounded-md text-center bg-gradient-to-r from-red-900/80 via-red-600/80 to-red-900/80
                        border border-red-500/50 
                        text-white font-montserrat text-sm uppercase tracking-[0.2em]
                        hover:tracking-[0.3em]
                        hover:border-red-400
                        transition-all duration-500
                        shadow-[0_0_15px_rgba(220,38,38,0.3)] 
                        hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
                        role="button"
                        tabIndex={0}
                        aria-label={`Ir a ${item.name}`}
                    >
                        {item.name}
                    </ScrollLink>
                ))}
            </nav>
        </aside>
    </div>
  );
};

export default SidebarMobile;
