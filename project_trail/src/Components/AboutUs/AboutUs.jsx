import React from 'react';
import Navbar from '../Dashboard/Navbar.jsx'; 
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myfooter from '../Dashboard/Myfooter.jsx';
const AboutUs = () => {


  return (
    <>
      <Navbar />
      <div>
      

        <section className="about">
        
          <p style={{fontWeight: 'bold'}}>
            Welcome to a future where managing your health is convenient, efficient, and personalized, courtesy of Chikitsak....
          </p>
          <div className="about-info">
            <div className="about-img">
              <img src="/src/LoginAssets/chikitsak.png" alt="Chikitsak Logo" />
            </div>
            <div>
              <p>Chikitsak, your trusted digital health companion, redefining the healthcare experience. We understand that navigating health concerns can be overwhelming, which is why we've created a seamless platform that simplifies the process. By gathering basic information like your symptoms and medical history, Chikitsak swiftly provides accurate diagnoses, empowering you with valuable insights into your health. Your privacy is paramount to us, and we employ robust security measures to ensure your data remains confidential.</p>
              <button>Read More...</button>
            </div>
          </div>
        </section>

        <div className="image-container">
          <img src="/src/LoginAssets/hehe.jpeg" alt="Description of Image" />
          {/* <div className="text-overlay">Your Text Here</div> */}
        </div>

        <section className="team">
          <h1>Meet Our Team</h1>
          <div className="team-cards">
            {/* Cards here */}
            {/* Card 1 */}
            <div className="card">
              <div className="card-img">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" alt="User 1" />
              </div>
              <div className="card-info">
                <h2 className="card-name">Jane</h2>
                <p className="card-role">CEO and Founder</p>
                <p className="card-email">jane@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card">
              <div className="card-img">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230822183347/man-portrait-businessman-male.jpg" alt="User 2" />
              </div>
              <div className="card-info">
                <h2 className="card-name">Miller</h2>
                <p className="card-role">Co-Founder</p>
                <p className="card-email">Miller@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card">
              <div className="card-img">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" alt="User 3" />
              </div>
              <div className="card-info">
                <h2 className="card-name">Joe</h2>
                <p className="card-role">Co-Founder</p>
                <p className="card-email">Joe@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="card">
              <div className="card-img">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" alt="User 3" />
              </div>
              <div className="card-info">
                <h2 className="card-name">Joe</h2>
                <p className="card-role">Co-Founder</p>
                <p className="card-email">Joe@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="card">
              <div className="card-img">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" alt="User 3" />
              </div>
              <div className="card-info">
                <h2 className="card-name">Joe</h2>
                <p className="card-role">Co-Founder</p>
                <p className="card-email">Joe@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
        </section>

        {/* Header section */}
        {/* <header className="hoi">
          <button className="hamburger" id="hamburger-icon">
            <span onClick={() => openNavbar()}> ☰</span>
          </button>
          <div className="kik">Your Logo</div>
          <nav id="nav-menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Enquiry</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </nav>
          <button className="reachUs-button">Call us</button>
        </header> */}

        {/* banner section  */}
        <section className="banner">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230822131732/images.png" alt="Welcome to our Contact Us page" />
          <h1>Get in Touch With Us</h1>
          <p>We're here to answer any questions you may have.</p>
        </section>

        {/* Contact form */}
        <section className="contact-form">
          <div className="form-container">
            <h2>Your Details</h2>
            <form action="#" method="POST">
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="phone">Phone: </label>
              <input type="tel" id="phone" name="phone" />
              <label htmlFor="message">Message: </label>
              <textarea id="message" name="message" rows="4" required></textarea>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </section>

        {/* Company contact info */}
        {/* <section className="contact-info">
          <h2>Contact Information</h2>
          <address>
            Team Chikitsak<br />
            Phone: <a href="tel:1234567890">123-456-7890</a><br />
            Email: <a href="mailto:chikitsak@gmail.com">chikitsak@gmail.com</a>
          </address>
        </section> */}

        {/* <footer>
          <p>© 2024 ..chikitsak.. All Rights Reserved.</p>
        </footer> */}
        <Myfooter/>
      </div>
      
    </>
  );
};

export default AboutUs;
