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
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/serviceEntry" element={<PrivateRoute><About /></PrivateRoute>} />
                <Route path="/services" element={<PrivateRoute><Services /></PrivateRoute>} />
                <Route path="/login" element={<Login />} />
                </Routes> 
              </div>

            </Container>
           
          </Router>
       
  );
}
