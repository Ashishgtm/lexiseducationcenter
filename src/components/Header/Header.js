
import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation  } from 'react-router-dom'; // Import Link from react-router-dom



import lexislogo from './lexislogo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation(); 

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    
  };

  return (
    <header className="header">
      <div className="logo">
      <Link to="/home"> <img src={lexislogo} alt="lexislogo" className="lexislogo" /></Link>
      </div>
      <button className="nav-toggler" onClick={toggleNav}>
        ☰
      </button>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
      <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>HOME</Link> 
      <Link to="/universities" className={location.pathname === "/universities" ? "active" : ""}>UNIVERSITIES</Link> 

        <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>SERVICES</Link>
        <Link to="/events" className={location.pathname === "/events" ? "active" : ""}>EVENTS</Link> 
        <Link to="/team" className={location.pathname === "/team" ? "active" : ""}>TEAM</Link> 
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>CONTACT US</Link> 
      </nav>
      <div className="contact">
        <button className="contact-btn">
          <span role="img" aria-label="phone">📱</span> +977-9843797777
        </button>
      </div>
    </header>
  );
};

export default Header;
