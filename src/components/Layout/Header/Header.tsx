import { useUserProfile } from '../../../contexts/UserContext';

const Header = () => {
  const { userProfile } = useUserProfile();

  const UserData = () => {
    return (
      <div className="flex gap-4 text-center">
        {userProfile && (
          <span>{userProfile?.firstName + ' ' + userProfile?.lastName}</span>
        )}
        <span className="font-bold">Carrito(1)</span>
        <span>Crédito ${userProfile?.credit}</span>
      </div>
    );
  };

  const NoUser = () => {
    return <h4>No hay usuario loggeado</h4>;
  };

  return (
    <header className="flex flex-col gap-3 sm:gap-0 sm:flex-row  justify-between items-center p-2 bg-main-black text-white">
      <h2 className="text-lg font-bold">Tienda de Productos</h2>
      {userProfile == null ? <NoUser /> : <UserData />}
    </header>
  );
};

export default Header;
