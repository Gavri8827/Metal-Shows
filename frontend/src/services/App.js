import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import ProtectedRoute from '../components/ProtectedRoute';
import HomePage from '../pages/HomePage';
import AdminLogin from '../pages/AdminLogin';
import BuyTicket from '../pages/BuyTicket';
import TrackOrders from '../pages/TrackOrders';
import AddNewShow from '../pages/AddNewShow';
import AddNewHall from '../pages/AddNewHall';



function App() {

 
  // 1) State for auth, initialized from localStorage
  const [isAuth, setIsAuth] = useState(localStorage.getItem('authenticated') === 'true');
  // 2) A logout handler that clears both storage and state
  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    setIsAuth(false);
  };

  return (
   <div>
      <Navbar isAuth={isAuth} onLogout={handleLogout}/>
      <Routes>

      <Route path='/' element={<HomePage/>}/>
      <Route path="/shows/:showId/buy" element={<BuyTicket />} />
      <Route path='/adminLogin' element={<AdminLogin onLogin={() => setIsAuth(true)} />} />
      <Route path='/buyTicket' element={<BuyTicket/>}/>
      <Route path="/trackOrders" element={
            <ProtectedRoute>
              <TrackOrders/>
            </ProtectedRoute>
          }
        />
      <Route path="/addHall" element={
            <ProtectedRoute>
              <AddNewHall/>
            </ProtectedRoute>
          }
        />
      <Route path="/addShow" element={
            <ProtectedRoute>
              <AddNewShow/>
            </ProtectedRoute>
          }
        />

    </Routes>
    </div>
    
  );
}

export default App;