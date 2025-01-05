import { Route, Routes } from 'react-router-dom';
import './App.css';
import Logo from '/Logo.svg';
import Header from './components/Layout/Header/Header';

function App() {
  const Other = () => {
    return (
      <div className="w-full flex flex-col justify-center items-center">
        <h1>Tailwind envioPack</h1>
        <img src={Logo} alt="" />
      </div>
    );
  };
  return (
    <body className="p-2">
      <Header />
      <main className="max-w-container-max m-auto min-h-[90dvh]">
        <Routes>
          <Route path="/" element={<p>HOME</p>}></Route>
          <Route path="/other" element={<Other />}></Route>
        </Routes>
      </main>
    </body>
  );
}

export default App;
