
import React, {useState} from "react";
import { Link,useNavigate} from 'react-router-dom'; // Import Link from react-router-dom

import './Register.module.css';
import '../../App.css';


import video from '../../LoginAssets/updatevideo.mp4'
import logo from '../../LoginAssets/chikitshak.png'
import { FaUserShield } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import Axios from 'axios'

const Register = () => {
    const[email, setEmail]= useState('')
    const[username, setuserName]= useState('')
    const[password, setPassword]= useState('')
    const navigateTo = useNavigate();

// Onnclick let's get what the user has entered
const createUser=(e) =>{
    e.preventDefault();
    if (!email || !username || !password) {
        alert('Please fill in all required fields.');
        return;
    }
    Axios.post('http://localhost:3002/register',{
        Email: email,
        UserName: username,
        Password: password
    }).then(()=>{
        // console.log('User has been created.')
        navigateTo('/')
        setEmail('')
        setuserName('')
        setPassword('')
    })

}
    return (
        <>
            <div className="registerPage flex">
                <div className="container flex">
                    <div className="videoDiv">
                        <video autoPlay muted loop src={video}></video>
                        <div className="textDiv">
                            {/* <h2 className="title">Wellness is a journey of many steps; fuel your body, enlighten your mind.</h2> */}
                            {/* <p>Be healthy and be safe.</p> */}
                        </div>
                        <div className="footerDiv flex">
                            <span className="text">Have an account.</span>
                            <Link to={'/'}>
                            <button className="btn">Login</button>
                            </Link>
                        </div>
                    </div>
                    <div className="formDiv flex">
                        <div className="headerDiv">
                            <img src={logo} alt="" />
                            <h3>Let's know you!</h3>
                        </div>
                        <form action="" className="form grid">
                            {/* <span className="showMessage">Login Status will go here.</span> */}
                            <div className="inputDiv">
                                <label htmlFor="email">Email</label>
                                <div className="input flex">
                                    <MdMarkEmailRead className="icon" />
                                    <input type="email" required placeholder="Enter email" id="email" onChange={(event)=>{
                                        setEmail(event.target.value)

                                    }}/>
                                </div>
                            </div>
                            <div className="inputDiv">
                                <label htmlFor="username">UserName</label>
                                <div className="input flex">
                                    <FaUserShield className="icon" />
                                    <input required type="text" placeholder="Enter username" id="username" 
                                    onChange={(event)=>{
                                        setuserName(event.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div className="inputDiv">
                                <label htmlFor="password">Password</label>
                                <div className="input flex">
                                    <BsFillShieldLockFill className="icon" />
                                    <input required type="password" placeholder="Enter password" id="password"
                                    onChange={(event)=>{
                                        setPassword(event.target.value)

                                    }}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn flex" onClick={createUser} >
                                <span>Register</span>
                                <AiOutlineSwapRight className="icon" />
                            </button>
                            <span className="forgotPassword">
                                Forget your password? <a href="">Click here</a>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
