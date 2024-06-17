import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from "./pages/Login";
import GoodDumps from './pages/GoodDumps';
import Analyze from "./pages/Analyze";
import Notfound from "./pages/Notfound";
import Menubar from './components/Menubar';

function App() {

  const nav = useNavigate();

  return (
    <>
      <div>
        <Menubar />
      </div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/gooddumps" element={<GoodDumps />}></Route>
        <Route path="/analyze" element={<Analyze />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
