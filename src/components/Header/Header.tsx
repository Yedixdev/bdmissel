import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { RiMenuFoldLine } from "react-icons/ri";
import CartSidebar from "./CartSidebar";
import { useCart } from "../Cart/CartContext";
import HeaderNavegation from "./HeaderNavegation";
import SidebarMobile from "./SidebarMobile";

const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const renderCartIcon = () => (
    <div
      className="relative cursor-pointer flex items-center"
      onClick={() => setIsCartOpen(!isCartOpen)}
      role="button"
      aria-label="Abrir el carrito de compras"
      tabIndex={0}
    >
      <IoCartOutline className="text-2xl lg:text-3xl hover:scale-110 transition-transform" />
      {totalItems > 0 && (
        <span className="text-sm bg-red-600 text-white py-[1px] px-[7px] absolute top-[-10px] right-[-10px] rounded-full">
          {totalItems}
        </span>
      )}
    </div>
  );

  const renderMenuIcon = () => (
    <RiMenuFoldLine
      className="flex lg:hidden text-2xl lg:text-3xl cursor-pointer hover:scale-110 transition-transform"
      role="button"
      aria-label="Abrir el menú de navegación"
      tabIndex={0}
      onClick={() => setIsSidebarOpen(true)}
    />
  );

  return (
    <div className="relative">
      <header className="w-full fixed top-0 left-0 h-14 lg:h-16 flex justify-between items-center px-4 lg:px-8 shadow-2xl z-50 bg-black/80 backdrop-blur-sm">
        {/* Logo */}
        <div className="text-3xl font-display text-white">
          <RouterLink to="/">Bdmissel</RouterLink>
        </div>
        <HeaderNavegation />
        <div className="flex items-center gap-5 text-white">
          {renderCartIcon()}
          {renderMenuIcon()}
        </div>
      </header>

      {/* Sidebar del carrito */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {isCartOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={() => setIsCartOpen(false)}
          role="button"
          aria-label="Cerrar la capa del carrito"
        />
      )}

      {/* Sidebar móvil */}
      <SidebarMobile
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default Header;
