// Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaTimes as FaXmark, FaBars } from "react-icons/fa";
import logo from "./images/chikitshak.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    // Example: set isLoggedIn based on your authentication logic
    useEffect(() => {
        // Example: check if user is logged in from localStorage
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedIn);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const navItems = [
        { link: "Home", path: "/dashboard" },
        { link: "Diagnose", path: "/diagnose" },
        { link: "Consult", path: "/consult" },
        {link: "Appointment",path: "/appointment"},
        { link: "FAQ", path: "/faq" },
        { link: "About Us", path: "/aboutus" }
    ];

    return (
        <>
            <header  className={`w-full ${isSticky ? 'bg-white' :'bg-transparent' } fixed top-0 left-0 right-0`}>
                <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-0" : "bg-transparent"}`}>
                    <div className="flex justify-between items-center text-base gap-8">
                        <Link to="/" className="text-2xl font-semibold flex items-center space-x-3">
                            <img src={logo} alt="" className="w-10 inline-block" />
                            <span className="text-[#263238]">CHIKITSAK</span>
                        </Link>
                        <ul className="md:flex space-x-12 hidden">
                            {navItems.map(({ link, path }) =>
                                <li key={path}>
                                    <Link
                                        to={path}
                                        className={`block text-base ${location.pathname === path ? "text-brandPrimary" : "text-gray-900"} hover:text-brandPrimary first:font-medium`}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <div className="space-x-12 hidden lg:flex items-center">
                            {/* Highlight login button based on login status */}
                            {isLoggedIn ? (
                                <Link to="/" className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900">Login</Link>
                            ) : (
                                <Link to="/" className="hidden lg:flex items-center text-brandPrimary">Login</Link>
                            )}
                            <Link to="/register" className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">SignUp</Link>
                            <Link to="/" className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Logout</Link>
                        </div>

                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-neutralDGrey focus:outline-none focus:text-grey-500">
                                {isMenuOpen ? (<FaXmark className="h-6 w-6 " />) : (<FaBars className="h-6 w-6 " />)}
                            </button>
                        </div>
                    </div>
                
                  <div className={`space-y-4 px-4 mt-16 py-7 bg-neutralDGrey ${isMenuOpen ? "block-fixed top-0 right-0 left-0" : "hidden"}`}>
                  {navItems.map(({ link, path }) =>
                            <li  key={path}>
                                <Link
                                    to={path}
                                    className={`block text-base ${location.pathname === path ? "text-brandPrimary" : "text-white"} hover:text-brandPrimary first:font-medium cursor:pointer`}
                                >
                                    {link}
                                </Link>
                            </li>
                        )}


                  </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;
