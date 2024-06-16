// Diagnose.jsx
import React from 'react';
import Navbar from '../Dashboard/Navbar.jsx';
import About1 from './About1.jsx';
import Wcsus from './Wcsus.jsx';
import Services from './Services.jsx';
import Map from './Map.jsx';
import Myfooter from '../Dashboard/Myfooter.jsx';

const Diagnose = () => {
    return (
        <>
            <Navbar />
            <About1/>
            <Services/>
            <Wcsus/>
            <Map/>
            <Myfooter />
            
            
            
        </>
    );
}

export default Diagnose;
