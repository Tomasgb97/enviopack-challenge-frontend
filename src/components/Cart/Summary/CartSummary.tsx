import React from 'react';

interface CartSummaryProps {
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
  return (
    <div className="w-full p-4 rounded shadow-md shadow-black bg-white flex justify-between items-center">
      <span className="text-lg font-semibold">Total</span>
      <span className="text-lg font-semibold">${total}</span>
    </div>
  );
};

export default CartSummary;
