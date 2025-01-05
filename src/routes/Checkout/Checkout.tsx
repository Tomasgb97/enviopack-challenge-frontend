import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../../components/Common/Button';
import { getCheckoutMessage } from '../../utils/checkoutMessage';
import toast, { Toaster } from 'react-hot-toast';
import { useUserProfile } from '../../contexts/UserContext';
import { useEffect } from 'react';

const Checkout = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const successStatus = searchParams.get('success');
  const { AddCreditsToUser } = useUserProfile();

  const isSuccess = successStatus === 'true';

  useEffect(() => {
    if (!isSuccess) {
      toast(
        'Notamos que te quedaste sin creditos. Así que te hicimos llegar algunos mas através de Enviopack 👀',
        { duration: 8000 }
      );
      toast('+10.000 creditos ! Vuelve al catalogo para usarlos.', {
        duration: 8000,
      });

      setTimeout(() => {
        AddCreditsToUser(10000);
      }, 1000);
    }
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Toaster position="bottom-right"></Toaster>
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
