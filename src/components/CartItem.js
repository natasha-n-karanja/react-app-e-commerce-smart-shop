import React from 'react';

export default function CartItem({ item, onRemove }) {
  return (
    <div className="flex items-center gap-4 border p-4 rounded shadow-sm bg-white">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">Qty: {item.qty}</p>
        <p className="text-gray-800 font-medium">
          ${(item.price * item.qty).toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Remove
      </button>
    </div>
  );
}