import { useUserProfile } from '../../../contexts/UserContext';
import { useCartStore } from '../../../stores/cart-store';
import { Popover } from 'react-tiny-popover';
import CartMenu from './CartMenu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { userProfile } = useUserProfile();
  const { items } = useCartStore();
  const navigate = useNavigate();
  const [popOverVisible, setPopOverVisible] = useState(false);

  const UserData = () => {
    return (
      <div className="flex gap-4 text-center">
        {userProfile && (
          <span>{userProfile?.firstName + ' ' + userProfile?.lastName}</span>
        )}
        <Popover
          content={<CartMenu />}
          positions={'bottom'}
          padding={5}
          align="center"
          isOpen={popOverVisible}
        >
          <span
            onClick={() => setPopOverVisible((state) => !state)}
            className="font-bold cursor-pointer select-none"
          >
            Carrito({items.length})
          </span>
        </Popover>

        <span>Crédito ${userProfile?.credit}</span>
      </div>
    );
  };

  const NoUser = () => {
    return <h4>No hay usuario loggeado</h4>;
  };

  return (
    <header className="flex flex-col gap-3 sm:gap-0 sm:flex-row  justify-between items-center p-2 bg-main-black text-white">
      <h2
        onClick={() => navigate('/')}
        className="text-lg cursor-pointer font-bold"
      >
        Tienda de Productos
      </h2>
      {userProfile == null ? <NoUser /> : <UserData />}
    </header>
  );
};

export default Header;
