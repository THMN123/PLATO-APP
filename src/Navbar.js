import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { Menu, WbSunny } from '@mui/icons-material'; // Import Hamburger Menu and Moon icon
import logo from './images/A1 SERVICES-logo(2).png'; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Menu className="navbar-icon" /> {/* Hamburger Menu icon */}
        <img src={logo} alt="Logo" className="navbar-logo" /> {/* Logo */}
        <WbSunny className="navbar-icon" /> {/* Crescent Moon icon for dark mode */}
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button">Sign Up</button>
        <button className="navbar-button">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;