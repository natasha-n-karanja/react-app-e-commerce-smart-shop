import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <h2 className="font-bold text-lg">{product.title}</h2>
      <p>{product.description}</p>
      <p className="text-green-600 font-semibold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
