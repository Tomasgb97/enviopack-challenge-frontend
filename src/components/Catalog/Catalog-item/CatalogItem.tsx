import React, { useMemo } from 'react';
import { useCartStore } from '../../../stores/cart-store';
import { Product } from '../../../types/product';
import Button from '../../Common/Button';

interface CatalogItemProps {
  image: string;
  title: string;
  price: number;
  discount: number;
  id: string;
  onAddToCart: () => void;
  onSeeCart: () => void;
}

const CatalogItem: React.FC<CatalogItemProps> = ({
  image,
  title,
  price,
  discount,
  id,
  onAddToCart,
  onSeeCart,
}) => {
  const { items } = useCartStore();

  const isOnCart = useMemo(
    () => items.some((item: Product) => item.id === id),
    [items, id]
  );
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
        {!isOnCart ? (
          <Button
            variant="Add"
            text="Agergar al carrito"
            onClick={onAddToCart}
          ></Button>
        ) : (
          <Button
            variant="Check"
            text="Ver carrito"
            onClick={onSeeCart}
          ></Button>
        )}
      </div>
    </div>
  );
};

export default CatalogItem;
