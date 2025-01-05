const Header = () => {
  return (
    <header className="flex flex-col gap-3 sm:gap-0 sm:flex-row  justify-between items-center p-2 bg-main-black text-white">
      <h2 className="text-lg font-bold">Tienda de Productos</h2>

      <div className="flex gap-4 text-center">
        <span>Juan Ignacio</span>
        <span className="font-bold">Carrito(1)</span>
        <span>Crédito $50.000</span>
      </div>
    </header>
  );
};

export default Header;
