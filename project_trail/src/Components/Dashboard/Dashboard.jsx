import React from "react";
import '../../NewApp.css';

// import 'tailwindcss/tailwind.css';
// import '../../index.css';

import Navbar from './Navbar.jsx'
import HomePage from './HomePage.jsx'
import Service from './Service.jsx'
import About from './About.jsx'
import Products from './Products.jsx'
import Blogs from './Blogs.jsx'
import Newsletter from './Newsletter.jsx'
import Myfooter from "./Myfooter.jsx";
// import Appointment from "./Appointment.jsx";
import { Link } from 'react-router-dom';




const Dashboard = () => {
    return (
        <>
            <Navbar/>
            <HomePage/>
            <Service/>
            <About/>
            {/* <Appointment/> */}
            <Blogs/>
            <Newsletter/>
            <Products/>
            <Myfooter/>
            {/* <Link to="/">Log Out</Link> */}
        </>
    )
}

export default Dashboard;
