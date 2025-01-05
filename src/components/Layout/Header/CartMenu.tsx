import React from 'react';
import { useCartStore } from '../../../stores/cart-store';

const CartMenu: React.FC = () => {
  const { clearCart } = useCartStore();
  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className=" bg-gray-100 border border-gray-600 rounded-md flex-col p-2">
      <span
        className="text-md cursor-pointer select-none text-red-500 font-semibold"
        onClick={handleClearCart}
      >
        Limpiar carrito
      </span>
    </div>
  );
};

export default CartMenu;
