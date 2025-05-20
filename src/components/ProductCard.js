import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2"/>
      <h2 className="font-semibold">{product.title}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}