"use client";
import { MdClose } from "react-icons/md";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import HeaderMobile from "../HeaderMobile";
import { Search } from "./components/Search";
import { useHeader } from "./useHeader";

const Header = () => {
  const {
    isOpen,
    isScrolled,
    toggleMenu,
    navItems,
    isActivePath,
  } = useHeader();

  return (
    <header
      className={`w-full fixed h-14 lg:h-16 flex justify-between items-center px-4 lg:px-8 shadow-2xl z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-black"
      }`}
    >
      <nav className="lg:flex gap-5 hidden">
        {navItems.map((item) => (
          <div key={item.path}>
            <Link
              to={item.path}
              className={`relative font-montserrat text-lg
                ${
                  isActivePath(item.path)
                    ? "text-red-900"
                    : "text-gray-50 hover:text-beige2"
                }`}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </nav>

      <div className="text-3xl lg:text-5xl font-display">Bdmissel</div>

      <div className="flex items-center gap-3">
        <div className="text-white cursor-pointer flex gap-3 items-center">
          <Search />
          <IoCartOutline className="text-2xl lg:text-3xl hover:scale-110 transition-transform" />
        </div>
        <div className="lg:hidden">
          <div onClick={toggleMenu} className="cursor-pointer">
            {isOpen ? (
              <MdClose className="text-beige1 hover:text-beige2 text-3xl transition duration-300 transform hover:scale-150" />
            ) : (
              <RiMenuUnfoldLine className="text-beige1 hover:text-beige2 text-2xl transition duration-300 transform hover:scale-150" />
            )}
          </div>
        </div>
      </div>
      {isOpen && <HeaderMobile />}
    </header>
  );
};

export default Header;
