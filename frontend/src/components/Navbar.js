import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white shadow">
      <h1 className="text-2xl font-bold">SmartShop</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
        <Link to="/checkout" className="hover:underline">Checkout</Link>
      </div>
    </nav>
  );
}