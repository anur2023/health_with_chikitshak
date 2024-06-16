import React from 'react';
import './Ourdoc.components.css';

export default function Ourdoc() {
  return (
    <div className="main">
      <section className="section__container doctors__container">
        <div className="doctors__header">
          <div className="doctors__header__content">
            <p className="img1">Our Special Doctors</p>
            <p className="img">
              We take pride in our exceptional team of doctors, each a specialist
              in their respective fields.
            </p>
          </div>
          <div className="doctors__nav">
            <span><i className="ri-arrow-left-line"></i></span>
            <span><i className="ri-arrow-right-line"></i></span>
          </div>
        </div>
        <div className="doctors__grid">
          <div className="doctors__card">
            <div className="doctors__card__image">
              <img src="components/images/doctor-1.jpg" alt="doctor"/>
              <div className="doctors__socials">
                <span><i className="ri-instagram-line"></i></span>
                <span><i className="ri-facebook-fill"></i></span>
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-twitter-fill"></i></span>
              </div>
            </div>
            <h4>Dr. Emily Smith</h4>
            <p>Cardiologist</p>
          </div>
          <div className="doctors__card">
            <div className="doctors__card__image">
              <img src="components/images/doctor-2.jpg" alt="doctor"/>
              <div className="doctors__socials">
                <span><i className="ri-instagram-line"></i></span>
                <span><i className="ri-facebook-fill"></i></span>
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-twitter-fill"></i></span>
              </div>
            </div>
            <h4>Dr. James Anderson</h4>
            <p>Neurosurgeon</p>
          </div>
          <div className="doctors__card">
            <div className="doctors__card__image">
              <img src="components/images/doctor-3.jpg" alt="doctor"/>
              <div className="doctors__socials">
                <span><i className="ri-instagram-line"></i></span>
                <span><i className="ri-facebook-fill"></i></span>
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-twitter-fill"></i></span>
              </div>
            </div>
            <h4>Dr. Michael Lee</h4>
            <p>Dermatologist</p>
          </div>
        </div>
      </section>
    </div>
  );
}
