import React from 'react';

interface CatalogItemProps {
  image: string;
  title: string;
  price: number;
  onAddToCart: () => void;
}

const CatalogItem: React.FC<CatalogItemProps> = ({
  image,
  title,
  price,
  onAddToCart,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <img className="w-full" src={image} alt={`${title} image`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">${price.toFixed(2)}</p>
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
