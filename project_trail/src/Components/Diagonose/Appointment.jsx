import React from 'react';
import Navbar from '../Dashboard/Navbar.jsx';
const Appointment =  () =>{
    return(
<>
<Navbar/>
<div style={{ marginTop: '80px', fontSize:'50px'}}> {/* Adjust margin-top value based on your Navbar height */}
                {/* Your Diagnose page content */}
                <h1>Appointment</h1>
            </div>
</>
    );
}
export default  Appointment;