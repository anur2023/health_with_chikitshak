import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and necessary components
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Diagnose from './Components/Diagonose/Diagnose.jsx'; // Import Diagnose page
import Consult from './Components/Consult/Consult.jsx'; // Import Consult page
import FAQ from './Components/FAQ/FAQ.jsx'; // Import FAQ page
import AboutUs from './Components/AboutUs/AboutUs.jsx'; // Import About Us page/
import Appointment from './Components/Appointment/Appointment.jsx';

import './index.css';

function App() {
  return (
    <Router> {/* Wrap your routes with Router component */}
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diagnose" element={<Diagnose />} /> Route for Diagnose page
        <Route path="/consult" element={<Consult />} /> 
        <Route path="/faq" element={<FAQ />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path= "/appointment" element = {<Appointment/>}/>
        
         {/* Route for About Us page */}
      </Routes>
    </Router>
  );
}

export default App;
