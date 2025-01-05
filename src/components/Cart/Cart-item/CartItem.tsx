import React from 'react';

interface CartItemProps {
  image: string;
  title: string;
  price: number;
  discount: number;
  onDelete: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  image,
  title,
  price,
  discount,
  onDelete,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center shadow-md border rounded p-2">
      <img
        src={image}
        alt={`${title} image `}
        className="w-16 h-16 object-cover mr-4"
      />
      <div className="w-full flex flex-col pb-2 sm:pb-0 sm:flex-row sm:items-center bg-slate-200 rounded-md pr-4">
        <div className="flex-1 p-4  text-left">
          <h3 className="text-lg font-semibold text-center sm:text-left">
            {title}
          </h3>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p
            className={`text-black font-semibold text-lg ${discount > 0 ? 'line-through font-normal text-gray-400' : ''}`}
          >
            ${price}
          </p>
          {discount > 0 && (
            <p className="text-lg font-semibold text-red-500">
              ${price - discount}
            </p>
          )}
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
