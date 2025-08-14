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


import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    const res = await fetch("http://127.0.0.1:5000/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart }),
    });

    const data = await res.json();
    alert(data.msg);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Checkout</h2>
      <button onClick={handleCheckout} className="bg-green-500 text-white p-2 rounded">
        Place Order
      </button>
    </div>
  );
}


import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    const res = await fetch("http://127.0.0.1:5000/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart }),
    });

    const data = await res.json();
    alert(data.msg);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Checkout</h2>
      <button onClick={handleCheckout} className="bg-green-500 text-white p-2 rounded">
        Place Order
      </button>
    </div>
  );
}
