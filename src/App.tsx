import { Route, Routes } from 'react-router-dom';
import './App.css';
import Logo from '/Logo.svg';
import Header from './components/Layout/Header/Header';
import { useMemo } from 'react';
import Catalog from './routes/Catalog/Catalog';

function App() {
  const Other = () => {
    return (
      <div className="w-full flex flex-col justify-center items-center">
        <h1>Tailwind envioPack</h1>
        <img src={Logo} alt="" />
      </div>
    );
  };

  const PublicRoutes = useMemo(() => {
    return [
      { path: '/', component: <Catalog /> },
      { path: '/other', component: <Other /> },
    ];
  }, []);

  return (
    <body className="p-2">
      <Header />
      <main className="max-w-container-max m-auto min-h-[90dvh]">
        <Routes>
          {PublicRoutes.map((rout, i) => {
            return (
              <Route key={i} path={rout.path} element={rout.component}></Route>
            );
          })}
        </Routes>
      </main>
    </body>
  );
}

export default App;
