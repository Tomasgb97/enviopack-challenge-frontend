import React from 'react';
import { Product } from '../../../types/product';
import CartItem from '../Cart-item/CartItem';
import { useCartStore } from '../../../stores/cart-store';
import Button from '../../Common/Button';
import { useNavigate } from 'react-router-dom';

interface ContainerProps {
  items: Product[];
}
const CartContainer: React.FC<ContainerProps> = ({ items }) => {
  const { removeItem } = useCartStore();
  const navigate = useNavigate();
  return (
    <div className=" w-full min-h-96 flex flex-col gap-4">
      {items.length == 0 && (
        <div className="flex-col justify-center items-center">
          <h1>
            Tu Carrito esta vacio, regresa al menu catalogo para cargar mas
            items
          </h1>
          <Button
            variant="Add"
            onClick={() => navigate('/')}
            text="Volver al Carrito"
          ></Button>
        </div>
      )}
      {items.length > 0 &&
        items.map((item) => {
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
