import { Route, Routes } from 'react-router-dom';
import './App.css';
import Logo from '/Logo.svg';

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
    <>
      <Routes>
        <Route path="/" element={<p>HOME</p>}></Route>
        <Route path="/other" element={<Other />}></Route>
      </Routes>
    </>
  );
}

export default App;
