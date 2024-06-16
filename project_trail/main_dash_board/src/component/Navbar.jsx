import React, { useEffect, useState } from "react";
import logo from "../LoginAssests/chikitshak.png";
import { Link } from 'react-scroll';
import { FaTimes as FaXmark, FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Set toggle menu
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

    // navitems array
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Diagnose", path: "diagnose" },
        { link: "Consult", path: "consult" },
        { link: "FAQ", path: "faq" },
        { link: "About Us", path: "aboutus" }
    ];

    return (
        <>
            <header className={`w-full ${isSticky ? 'bg-white' : 'bg-transparent'} fixed top-0 left-0 right-0`}>
                <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-whiteduration-300":""}`}>
                    <div className="flex justify-between items-center text-base gap-8">
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
                        <img src={logo} alt="" className="w-10 inline-block" />
                        <span className="text-[#263238]">CHIKITSAK</span>
                    </a>
                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({ link, path }) =>
                            <li key={path}>
                                <Link
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    className='block text-base text-gray-900 hover:text-brandPrimary first:font-medium'
                                >
                                    {link}
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div className="space-x-12 hidden lg:flex items-center">
                        <a href="/" className="hidden lg:flex items-center text-brand-primary hover:text-gray-900">Login</a>
                        <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">SignUp</button>
                    </div>

                    {/* menu btn for only mobile device */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}className="text-neutralDGrey focus:outline-none focus:text-grey-500">
                            {isMenuOpen ? (<FaXmark className="h-6 w-6 " />) : (<FaBars className="h-6 w-6 " />)}
                        </button>
                    </div>
                    </div>
                
                 {/**
                  * Nav items for mobile devices
                  */}
                  <div className={`space-y-4 px-4 mt-16 py-7 bg-neutralDGrey  ${isMenuOpen? "block-fixed top-0 right-0 left-0":"hidden"}`}>
                  {navItems.map(({ link, path }) =>
                            <li  key={path}>
                                <Link
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    className='block text-base text-white hover:text-brandPrimary first:font-medium cursor:pointer' 
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
