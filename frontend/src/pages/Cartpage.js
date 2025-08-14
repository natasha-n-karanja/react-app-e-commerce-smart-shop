import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <span>{item.title}</span>
          <span>${item.price}</span>
          <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
        </div>
      ))}
      <p className="mt-4 font-bold">Total: ${total}</p>
    </div>
  );
}
