import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
          <div className="flex justify-between items-center border-t pt-4 mt-6">
            <h2 className="text-lg font-semibold">Total:</h2>
            <span className="text-xl font-bold text-green-600">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}