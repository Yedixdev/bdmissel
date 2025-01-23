import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../Cart/CartContext";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const whatsappNumber = "+573146757244";

  const generateCartMessage = () => {
    const baseMessage = "Hola BDMissel, me interesa la siguiente compra:\n\n";
    const productDetails = cart.map(
      (item) =>
        `- Producto: ${item.name}\n  Color: ${item.color}\n  Talla: ${item.size}\n  Precio: $${item.price.toFixed(
          2
        )} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`
    ).join("\n");
    const closingMessage = `\n\nMe gustaría obtener más información y asesoramiento sobre estos productos.`;
    return encodeURIComponent(`${baseMessage}${productDetails}${closingMessage}`);
  };
  return (
    <>
      <header className="w-full fixed h-14 lg:h-16 flex justify-between items-center px-4 lg:px-8 shadow-2xl z-50 transition-all duration-300 bg-black/80 backdrop-blur-sm">
        <div className="text-3xl font-display text-white">
          Bdmissel
        </div>
        {/* <div className="flex gap-5 text-lg ml-[-120px] text-white">
          <div>Inicio</div>
          <div>Colecciones</div>
          <div>Nosotros</div>
        </div> */}
        
        <div className="text-white cursor-pointer flex  items-center relative" onClick={toggleCart}>
          <IoCartOutline className="text-2xl lg:text-3xl hover:scale-110 transition-transform" />
          <span className="text-sm bg-red-600 text-white py-[1px] px-[7px] top-[-10px] right-[-10px] absolute rounded-full">
            {totalItems} 
          </span>
        </div>
      </header>
      <div
        className={`fixed top-0 right-0 h-full w-72 lg:w-96  bg-gradient-to-r from-black via-zinc-950 to-black z-50 transform border-l border-red-800/30 group shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 hover:border-red-600/50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="p-6 flex justify-between items-center border-b border-red-800/80">
          <h2 className="text-3xl font-semibold font-display text-gray-100">Tu Carrito</h2>
          <button
            className="text-red-600 hover:text-red-800 text-2xl font-bold"
            onClick={toggleCart}
          >
            X
          </button>
        </div>
        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-160px)] cart-scroll">
          {cart.length > 0 ? (
            <>
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b pb-4 border-red-800/30"
                  >
                    <div>
                      <p className="text-2xl font-display text-gray-100">{item.name}</p>
                      <p className="text-gray-100 flex flex-col mt-2">
                        <div className="flex gap-2">
                          <span className="text-red-600 font-semibold">Color:</span>
                          <span className="text-gray-100">{item.color}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-red-600 font-semibold">Talla:</span>
                          <span className="text-gray-100">{item.size}</span>
                        </div>
                      </p>
                      <p className="stext-white mt-3">
                        <span className="font-semibold bg-gradient-to-r from-black via-red-950 to-black py-2 px-4 rounded-lg">
                          ${item.price.toFixed(2)}
                        </span>
                      </p>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-700 text-2xl"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="pt-6 mt-4">
                <p className="bg-gradient-to-r from-black via-red-950 to-black text-lg font-semibold text-gray-100 text-center py-2 rounded-lg "> 
                  Total:{" "}
                  <span className="font-sans text-white px-4 py-2 rounded-full">
                    ${totalPrice}
                  </span>
                </p>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${generateCartMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-red-600/30 bg-gradient-to-r from-black via-red-950 to-black  hover:bg-gradient-to-l hover:from-red-500 hover:via-red-700 hover:to-red-500  text-white text-lg font-bold rounded-lg text-center mt-6 block "
              >
                Comprar Ahora
              </a>
            </>
          ) : (
            <p className="text-center text-gray-100">Tu carrito está vacío.</p>
          )}
        </div>
      </div>
      {isCartOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={toggleCart}
        />
      )}
    </>
  );
};

export default Header;
