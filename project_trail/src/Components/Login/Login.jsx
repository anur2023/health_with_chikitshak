// Login.js
import React,{useEffect, useState} from "react";
import { Link , useNavigate} from 'react-router-dom'; // Import Link from react-router-dom

import './Login.module.css';
import '../../App.css';
import  Axios  from "axios";

import video from '../../LoginAssets/updatevideo.mp4'
import logo from '../../LoginAssets/chikitshak.png'
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {

    // We are using here useState hook to store inputs.
    const[loginUsername, setLoginUserName]= useState('')
    const[loginPassword, setLoginPassword]= useState('')
    const navigateTo = useNavigate();
    const [loginStatus , setLoginStatus] = useState('');
    const [statusHolder, setstatusHolder] = useState('message')


    const loginUser=(e) =>{
        e.preventDefault();
        
        Axios.post('http://localhost:3002/login',{
            
            LoginUserName: loginUsername,
            LoginPassword: loginPassword
        }).then((responce)=>{
        //    console.log(responce);
        if(responce.data.message || loginUsername==''||loginPassword==''){
            navigateTo('/')
            // console.log(responce.data.message)
            setLoginStatus(`Creditials don't exist!`)
        }
        else{
            navigateTo('dashboard')
        }
        })
    
    }
    useEffect(()=>{
        if(loginStatus !== ''){
            setstatusHolder('showMessage')
            setTimeout(()=>{
                setstatusHolder('message')
            },4000);
        }
    },[loginStatus])

    const onSubmit=()=>{
        setLoginUserName('')
        setLoginPassword('')
    }

    return (
        <>
            <div className="loginPage flex">
                <div className="container flex">
                    <div className="videoDiv">
                        <video autoPlay muted loop src={video}></video>
                        <div className="textDiv">
                            {/* <h2 className="title">Each effort towards wellness is essential nourish your body,</h2> */}
                            {/* <p>enlighten your mind, and nurture your spirit for a radiant life.".</p> */}
                        </div>
                        <div className="footerDiv flex">
                            <span className="text">Don't have an account.</span>
                            <Link to={'/register'}>
                            <button className="btn">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                    <div className="formDiv flex">
                        <div className="headerDiv">
                            <img src={logo} alt="" className="logofit" />
                            <h3>Welcome Back!</h3>
                        </div>
                        <form action="" className="form grid" onSubmit={onSubmit}>
                            <span className={statusHolder}>{loginStatus}</span>
                            <div className="inputDiv">
                                <label htmlFor="username">UserName</label>
                                <div className="input flex">
                                    <FaUserShield className="icon" />
                                    <input required type="text" placeholder="Enter username" id="username" 
                                    onChange={(event)=>{
                                        setLoginUserName(event.target.value)

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
                                        setLoginPassword(event.target.value)

                                    }}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn flex" onClick={loginUser}>
                                <span>Login</span>
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

export default Login;
