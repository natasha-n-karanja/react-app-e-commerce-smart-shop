import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className="p-6">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center mb-4">
              <img src={item.image} alt="" className="w-16 h-16 object-cover mr-4"/>
              <div>
                <h3>{item.title}</h3>
                <p>Qty: {item.qty}</p>
                <p>${(item.price * item.qty).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h2 className="mt-4 font-bold">Total: ${total}</h2>
        </>
      )}
    </div>
  );
}
