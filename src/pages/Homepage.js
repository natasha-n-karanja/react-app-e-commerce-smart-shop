import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          🛍️ Welcome to Smart Shop!
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-md">
          Discover quality products at unbeatable prices. Start shopping now!
        </p>
        <Link
          to="/products"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}

export default Homepage;