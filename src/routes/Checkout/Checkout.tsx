import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../../components/Common/Button';
import { getCheckoutMessage } from '../../utils/checkoutMessage';

const Checkout = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const successStatus = searchParams.get('success');

  const isSuccess = successStatus === 'true';

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl">Estado de la compra</h1>

      <div className="w-full max-w-checkout-max p-4 flex flex-col items-center gap-4 rounded shadow-md shadow-black">
        <span className="w-[60%]">{getCheckoutMessage(isSuccess)}</span>
        <Button
          onClick={() => {
            navigate('/');
          }}
          text="Volver al carrito"
          variant="Add"
        ></Button>
      </div>
    </div>
  );
};

export default Checkout;
