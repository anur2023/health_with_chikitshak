import React from 'react';
import './Wcus.css'; // Corrected import statement

export default function Wcsus() { // Corrected function name to follow React component naming convention
  return (
    <div className='w'>
      <section className="section__container why__container">
        <div className="why__image">
          <img src="/src/LoginAssets/2-scaled.jpg" alt="why choose us" /> {/* Corrected image source */}
        </div>
        <div className="why__content">
          <h2 className="section__header">Why Choose Us</h2>
          <p>
            With a steadfast commitment to your well-being, our team of highly
            trained healthcare professionals ensures that you receive nothing
            short of exceptional patient experiences.
          </p>
          <div className="why__grid">
            <span><img src="/src/LoginAssets/icon2.png" className="icon1" alt="" /></span>
            <div>
              <h4>Intensive Care</h4>
              <p>
                Our Intensive Care Unit is equipped with advanced technology and
                staffed by team of professionals
              </p>
            </div>
            <span><img src="/src/LoginAssets/icon1.png" className="icon2" alt="" /></span>
            <div>
              <h4>Free Ambulance Car</h4>
              <p>
                A compassionate initiative to prioritize your health and
                well-being without any financial burden.
              </p>
            </div>
            <span><img src="/src/LoginAssets/icon3.png" className="icon3" alt="" /></span> {/* Corrected closing tag */}
            <div>
              <h4>Medical and Surgical</h4>
              <p>
                Our Medical and Surgical services offer advanced healthcare
                solutions to address medical needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
