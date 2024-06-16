import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <a href="https://flowbite.com" className="footer-brand">
              <img src="/src/LoginAssests/chikitshak.png" alt="Flowbite Logo" className="footer-brand-img" />
              Chikitshak
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <h3 className="footer-title">About</h3>
              <ul className="footer-links">
                <li><a href="#">Chikitshak</a></li>
                <li><a href="#"></a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Follow us</h3>
              <ul className="footer-links">
                <li><a href="#">Github</a></li>
                <li><a href="#">Discord</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Legal</h3>
              <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="grid justify-between sm:flex sm:items-center sm:justify-between">
          <p className="footer-copyright">
            © Chikitshak™ 2024
          </p>
          <div className="footer-icons">
            <a href="#" className="footer-icon"><BsFacebook /></a>
            <a href="#" className="footer-icon"><BsInstagram /></a>
            <a href="#" className="footer-icon"><BsTwitter /></a>
            <a href="#" className="footer-icon"><BsGithub /></a>
            <a href="#" className="footer-icon"><BsDribbble /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
