import { useState } from 'react';
// import { CartContext } from '../context/CartContext';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart } = useCart();
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simple validation
    if (!form.name || !form.email || !form.address) {
      alert('Please fill in all fields');
      return;
    }
    setSubmitted(true);
    // In real app: send `form` + `cartItems` to backend here
  }

  if (submitted) {
    return <h2>Thank you for your order, {form.name}!</h2>;
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-md">
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-2 border"
      />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border"
      />
      <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} className="w-full p-2 border"
      />
      <button  type="submit"  className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
    </form>
  );
}
