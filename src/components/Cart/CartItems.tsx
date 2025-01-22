import React from 'react';
import { useCart } from '../CartProvider';

const CartItems: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.quantity} x {item.price} COP</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
