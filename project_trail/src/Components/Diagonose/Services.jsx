import React from 'react';
import './Services.css'; // Import the CSS file

export default function CardContainer() {
  return (
    <div>
        <h1 className="heading"> Our Specialities</h1>
        <h3 className="subheading"> Consult with the top local Doctors </h3>
    <div className="card-container">
        
      <div className="card">
        <img src="/src/LoginAssets/1.jpg" alt="" />
        <div className="card-details">
          {/* No title and description */}
        </div>
      </div>
      <div className="card">
        <img src="/src/LoginAssets/2.jpg" alt="" />
        <div className="card-details">
          {/* No title and description */}
        </div>
      </div>
      <div className="card">
        <img src="/src/LoginAssets/3.jpg" alt="" />
        <div className="card-details">
          {/* No title and description */}
        </div>
      </div>
      <div className="card">
        <img src="/src/LoginAssets/4.jpg" alt="" />
        <div className="card-details">
          {/* No title and description */}
        </div>
      </div>
      <div className="card">
        <img src="/src/LoginAssets/5.jpg" alt="" />
        <div className="card-details">
          {/* No title and description */}
        </div>
      </div>
      <div className="card">
        <img src="/src/LoginAssets/6.jpg" alt="" />
        <div className="card-details">
          {/* No title and description */}
        </div>
      </div>
      <div className="card">
        <img src="/src/LoginAssets/7.jpg" alt="" />
        <div className="card-details">
          {/* No title and description */}
        </div>
      </div>
    </div>
    <div className="content">
      <div className="content__container">
        <p className="content__container__text">
          Hello
        </p>

        <ul className="content__container__list">
          <li className="content__container__list__item">world !</li>
          <li className="content__container__list__item">bob !</li>
          <li className="content__container__list__item">users !</li>
          <li className="content__container__list__item">Need Appointment</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
