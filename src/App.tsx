import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header/Header';
import { useMemo } from 'react';
import Catalog from './routes/Catalog/Catalog';
import { UserProfileProvider } from './contexts/UserContext';
import Cart from './routes/Cart/Cart';
import Checkout from './routes/Checkout/Checkout';

function App() {
  const PublicRoutes = useMemo(() => {
    return [
      { path: '/', component: <Catalog /> },
      { path: '/cart', component: <Cart /> },
      { path: '/checkout', component: <Checkout /> },
    ];
  }, []);

  return (
    <div className="p-2">
      <UserProfileProvider>
        <Header />
        <main className="max-w-container-max m-auto min-h-[90dvh]">
          <Routes>
            {PublicRoutes.map((rout, i) => {
              return (
                <Route
                  key={i}
                  path={rout.path}
                  element={rout.component}
                ></Route>
              );
            })}
          </Routes>
        </main>
      </UserProfileProvider>
    </div>
  );
}

export default App;
