import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {product.title}
      </h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-green-600">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}