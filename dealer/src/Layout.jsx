import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import {useAuth } from './context/AuthContext';
import ServiceEntry from './pages/ServicesEntry';
import CustomerFeedback from './pages/CustomerFeedback';
import MechanicCreation from './pages/MechanicCreation';
import Cartracking from './pages/CarTracking';
import CustomerCreation from './pages/CustomerCreation';
import VehicleTracking from './pages/CarTracking';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}


export default function Layout() {
  const [isOpen, setOpen] = useState(false);

const toogleMenu=()=>{
  debugger;
  setOpen(isOpen => !isOpen);
}
  return (
    
          <Router>
            <Container fluid className='position-relative bg-white d-flex p-0'>
                <Sidebar isOpen={isOpen}/>

                <div className={isOpen ? "content open":"content"}>
                <TopNav toogleMenu={toogleMenu}/>               
                <Routes>
                <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/serviceEntry" element={<PrivateRoute><ServiceEntry /></PrivateRoute>} />
                <Route path="/customerCreation" element={<PrivateRoute><CustomerCreation /></PrivateRoute>} />
                <Route path="/mechanicCreation" element={<PrivateRoute><MechanicCreation /></PrivateRoute>} />
                <Route path="/customerFeedback" element={<PrivateRoute><CustomerFeedback /></PrivateRoute>} />
                <Route path="/vehicletracking" element={<PrivateRoute><VehicleTracking/></PrivateRoute>} />
                <Route path="/login" element={<Login />} />
                </Routes> 
              </div>

            </Container>
           
          </Router>
       
  );
}
