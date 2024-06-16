import React from 'react';
// Import the regular CSS file
import './About.component.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


export default function About1() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/src/LoginAssets/abouts1.jpg" className="d-block w-100 carouselImg" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Avoid the hassle</h5>
              <p>Get in touch with your trusted nearby doctors</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/src/LoginAssets/about2.jpg" className="d-block w-100 carouselImg" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Consult fast with 30+ experienced Doctors</h5>
              <p>No waiting rooms, no hassle. Connect with trusted doctors in seconds</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/src/LoginAssets/about4.jpg" className="d-block w-100 carouselImg" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>24 X Support</h5>
              <p>Resolve your Queries even At home..</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
