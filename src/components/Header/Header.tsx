import { IoCartOutline } from "react-icons/io5";
import HeaderWs from "./HeaderWs";

const Header = () => {
  return (
    <header
      className={`w-full fixed h-14 lg:h-16 flex justify-between items-center px-4 lg:px-8 shadow-2xl z-50 transition-all duration-300 bg-black/80 backdrop-blur-sm  
      }`}
    >
      <div><HeaderWs /></div>
      <div className="text-3xl lg:text-5xl font-display">Bdmissel</div>
      <div className="text-white cursor-pointer flex gap-3 items-center">
        <IoCartOutline className="text-2xl lg:text-3xl hover:scale-110 transition-transform" />
      </div>
    </header>
  );
};

export default Header;
