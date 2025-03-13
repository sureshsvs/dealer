import React, { createContext, useContext, useState } from 'react';

import user from '../assets/user.jpg';

export default function Sidebar({isOpen }) {


  return (
    // <div style={{ width: '200px', background: '#f4f4f4', height: '100vh', padding: '20px' }}>
    //   <h3>Admin Panel</h3>
    //   <ul>
    //     <li><Link to="/">Dashboard</Link></li>
    //     <li><Link to="/about">About</Link></li>
    //     <li><Link to="/services">Services</Link></li>
    //     <li><button onClick={handleLogout}>Logout</button></li>
    //   </ul>
    // </div>

<>
<div className={isOpen ? "bg-light sidebar  pb-3 open" : "bg-light sidebar pb-3 "}>
<nav className="navbar navbar-light">
<a href="index.html" className="navbar-brand mx-4 mb-3">
    <h3 className="text-primary"><i className="fa fa-car me-2"></i>Dharsha</h3>
</a>
<div className="d-flex align-items-center ms-4 mb-4">
    <div className="position-relative">
        <img className="rounded-circle" src={user} alt="" style={{width: "40px", height: "40px"}}></img>
        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
    </div>
    <div className="ms-3">
        <h6 className="mb-0">Jhon Doe</h6>
        <span>Dealer</span>
    </div>
</div>
<div className="navbar-nav w-100">
    <a href="/" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
    <a href="/serviceEntry" className="nav-item nav-link"><i className="fa fa-gear me-2"></i>Service Entry</a>
    <a href="/vehicletracking" className="nav-item nav-link"><i className="fa fa-map me-2"></i>Vehicle Tracking</a>
    <a href="/customercreation" className="nav-item nav-link"><i className="fa fa-user-plus"></i>Customer Creation</a>
    <a href="/mechaniccreation" className="nav-item nav-link"><i className="fa fa-wrench me-2"></i>Mechanic Creation</a>
    <a href="/customerfeedback" className="nav-item nav-link"><i className="fa fa-comments me-2"></i>Customer Feedback</a>
   
</div>
</nav>
</div>
</>
  );
}
