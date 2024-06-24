import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from "./pages/Login";
import Main from './pages/Main';
import Analyze from "./pages/Analyze";
import Notfound from "./pages/Notfound";

function App() {

  const nav = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/main/:userId" element={<Main />}></Route>
        <Route path="/analyze" element={<Analyze />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
