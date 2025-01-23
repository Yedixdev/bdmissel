import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../Cart/CartContext";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const whatsappNumber = "+573146757244";

  const generateCartMessage = () => {
    const baseMessage = "Hola BDMissel, me interesa la siguiente compra:\n\n";
    const productDetails = cart
      .map(
        (item) =>
          `- Producto: ${item.name}\n  Color: ${item.color}\n  Talla: ${item.size}\n  Precio: $${item.price.toFixed(
            2
          )}`
      )
      .join("\n");
    const closingMessage = `\n\nMe gustaría obtener más información y asesoramiento sobre estos productos.`;
    return encodeURIComponent(`${baseMessage}${productDetails}${closingMessage}`);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 lg:w-96 bg-gradient-to-r from-black via-zinc-950 to-black z-50 transform border-l border-red-800/30 group shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex justify-between items-center border-b border-red-800/80">
        <h2 className="text-3xl font-semibold font-display text-gray-100">
          Tu Carrito
        </h2>
        <button
          className="text-red-600 hover:text-red-800 text-2xl font-bold"
          onClick={onClose}
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
                    <p className="text-2xl font-display text-gray-100">
                      {item.name}
                    </p>
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
                    <p className="text-white mt-3">
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
              <p className="bg-gradient-to-r from-black via-red-950 to-black text-lg font-semibold text-gray-100 text-center py-2 rounded-lg">
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
              className="px-6 py-3 border border-red-600/30 bg-gradient-to-r from-black via-red-950 to-black hover:bg-gradient-to-l hover:from-red-500 hover:via-red-700 hover:to-red-500 text-white text-lg font-bold rounded-lg text-center mt-6 block"
            >
              Comprar Ahora
            </a>
          </>
        ) : (
          <p className="text-center text-gray-100">Tu carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
