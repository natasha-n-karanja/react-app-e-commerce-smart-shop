import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js';
import Home from './pages/Homepage.js';
import Products from './pages/Productpage.js';
import Cart from './pages/Cartpage.js';
import Checkout from './pages/Checkoutpage.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
