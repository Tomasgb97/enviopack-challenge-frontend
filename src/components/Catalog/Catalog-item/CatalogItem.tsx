import React from 'react';

interface CatalogItemProps {
  image: string;
  title: string;
  price: number;
  discount: number;
  onAddToCart: () => void;
}

const CatalogItem: React.FC<CatalogItemProps> = ({
  image,
  title,
  price,
  discount,
  onAddToCart,
}) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-md shadow-slate-500 p-4">
      <img
        className="w-full max-h-72 object-contain"
        src={image}
        alt={`${title} image `}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex justify-center gap-2">
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
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="w-full bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CatalogItem;
