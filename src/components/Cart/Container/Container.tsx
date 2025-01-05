import React from 'react';
import { Product } from '../../../types/product';
import CartItem from '../Cart-item/CartItem';
import { useCartStore } from '../../../stores/cart-store';

interface ContainerProps {
  items: Product[];
}
const CartContainer: React.FC<ContainerProps> = ({ items }) => {
  const { removeItem } = useCartStore();
  return (
    <div className=" w-full min-h-96 flex flex-col gap-4">
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            onDelete={() => {
              removeItem(item.id);
            }}
            image={'/images/image-product.jpg'}
            title={item.title}
            price={item.price}
            discount={item.discount}
          />
        );
      })}
    </div>
  );
};

export default CartContainer;
