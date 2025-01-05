import { useMemo } from 'react';
import Container from '../../components/Cart/Container/Container';
import CartSummary from '../../components/Cart/Summary/CartSummary';
import { useCartStore } from '../../stores/cart-store';
import Button from '../../components/Common/Button';
import { useNavigate } from 'react-router-dom';
import { useUserProfile } from '../../contexts/UserContext';

const Cart = () => {
  const { items, clearCart } = useCartStore();
  const { consumeUserCredits } = useUserProfile();
  const navigate = useNavigate();

  const totalAhorro = useMemo(() => {
    if (!items) {
      return 0;
    }
    return items.reduce((acc, item) => acc + item.discount, 0);
  }, [items]);

  const total = useMemo(() => {
    if (!items) {
      return 0;
    }
    return items.reduce((acc, item) => acc + (item.price - item.discount), 0);
  }, [items]);

  const handleCheckout = () => {
    if (consumeUserCredits(total)) {
      navigate('/checkout?success=true');
      clearCart();
    } else {
      navigate('/checkout?success=false');
    }
  };

  return (
    <>
      <h1 className="font-bold text-4xl">Carrito</h1>
      <Container items={items} />
      <div className="w-full flex flex-col gap-8 items-center">
        <CartSummary total={total} />
        {totalAhorro > 0 && (
          <span className="text-red-500 font-semibold text-xl">
            Te ahorraste $ {totalAhorro} !!
          </span>
        )}
        {items.length > 0 && (
          <div className="w-full flex justify-between">
            <Button
              className="max-w-fit"
              text="Volveral catálogo"
              variant="Add"
              onClick={() => navigate('/')}
            ></Button>
            <Button
              className="max-w-fit"
              text="Finalizar compra"
              variant="Add"
              onClick={() => handleCheckout()}
            ></Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
