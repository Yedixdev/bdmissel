import React, { createContext, useState, useContext, ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid'; // Importa uuid para generar IDs únicos

// Definir la estructura de los productos con id
interface Product {
  id: string; // Identificador único generado con uuid
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number; // Añadir la propiedad de cantidad
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  getTotalPrice: () => number; // Función para calcular el precio total
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Agregar productos al carrito
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Si el producto ya existe, aumentamos la cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Si no existe, lo agregamos con cantidad 1
      return [...prevCart, { ...product, id: uuidv4(), quantity: 1 }];
    });
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Calcular el precio total considerando la cantidad de productos
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
