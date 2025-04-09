import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import AdminLogin from '../pages/AdminLogin';
import BuyTicket from '../pages/BuyTicket';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/adminLogin' element={<AdminLogin/>}/>
      <Route path='/buyTicket' element={<BuyTicket/>}/>
    </Routes>
    </div>
    
  );
}

export default App;