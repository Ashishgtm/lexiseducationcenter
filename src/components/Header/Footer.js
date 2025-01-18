import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=chevron_right" />


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h1>STUDENT SERVICES</h1>
        <div className="footer-item">Overseas University Enrollment</div>
        <div className="footer-item">Visa Application Assistance</div>
        <div className="footer-item">English Proficiency Test Preparation</div>
        <div className="footer-item">Financial Guidance</div>
        <div className="footer-item">University Admissions Guidance</div>
        <div className="footer-item">Accommodation Support</div>
        <div className="footer-item">Document Verification and Legal Support</div>
        <div className="footer-item">Career Counseling</div>
        <div className="footer-item">Emergency Support Services</div>

      </div>
      <div className="footer-section">
        <h1>ABOUT</h1>
        <div className="footer-item">About Us</div>
        <div className="footer-item">Message from Director</div>
      </div>
      <div className="footer-section">
        <h1>QUICK LINKS</h1>
        <div className="footer-item">Events</div>
        <div className="footer-item">Blog</div>
        <div className="footer-item">Contact us</div>
      </div>
      <div className="footer-name">Lexis Education Center</div>
      <div className="footer-social">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2025. Lexis Education Center. All Rights Reserved.
        </p>
        <p>Privacy Policy | Code of Conduct | Modern Slavery Policy | Under 18 Policy and Procedure</p>
      </div>
    </footer>
  );
};

export default Footer;
