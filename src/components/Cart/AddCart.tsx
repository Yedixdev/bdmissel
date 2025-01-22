// import { useState } from 'react';
// import { IoCartOutline } from "react-icons/io5";
// import { MdClose } from "react-icons/md";
// import { useCart } from "./CartContext";

// const Cart = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { cart, removeFromCart, updateQuantity } = useCart();

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="relative">
//       <div 
//         onClick={() => setIsOpen(!isOpen)} 
//         className="cursor-pointer relative"
//       >
//         <IoCartOutline className="text-2xl lg:text-3xl hover:scale-110 transition-transform" />
//         {cart.length > 0 && (
//           <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//             {cart.length}
//           </span>
//         )}
//       </div>

//       {isOpen && (
//         <div className="absolute right-0 top-12 w-96 bg-black border border-red-600/30 shadow-lg z-50">
//           <div className="p-4">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Carrito de Compras</h2>
//               <button onClick={() => setIsOpen(false)}>
//                 <MdClose className="text-2xl hover:text-red-500" />
//               </button>
//             </div>

//             {cart.length === 0 ? (
//               <p className="text-center py-4">Tu carrito está vacío</p>
//             ) : (
//               <>
//                 <div className="max-h-96 overflow-y-auto">
//                   {cart.map((item) => (
//                     <div key={item.id} className="flex items-center gap-4 border-b border-red-600/30 py-4">
//                       {item.image && (
//                         <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
//                       )}
//                       <div className="flex-1">
//                         <h3 className="font-semibold">{item.title}</h3>
//                         <p className="text-sm text-gray-400">
//                           Talla: {item.size}, Color: {item.color}
//                         </p>
//                         <p className="text-red-500">${item.price}</p>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
//                           className="px-2 border border-red-600/30 hover:border-red-600"
//                         >
//                           -
//                         </button>
//                         <span>{item.quantity}</span>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="px-2 border border-red-600/30 hover:border-red-600"
//                         >
//                           +
//                         </button>
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="ml-2 text-red-500 hover:text-red-600"
//                         >
//                           <MdClose />
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-4 border-t border-red-600/30 pt-4">
//                   <div className="flex justify-between mb-4">
//                     <span>Total:</span>
//                     <span className="font-semibold">${total}</span>
//                   </div>
//                   <button className="w-full bg-red-600 text-white py-2 hover:bg-red-700 transition-colors">
//                     Proceder al pago
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;