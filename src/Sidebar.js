import React from 'react';
import { ShoppingCart, Person, WbSunny } from '@mui/icons-material'; // Import icons for the sidebar
import './Sidebar.css'; // Import the CSS file for sidebar styling

const Sidebar = ({ onJointSelect }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={() => onJointSelect({ name: "Cart", description: "Your shopping cart", rating: 4.5 })}>
        <ShoppingCart className="sidebar-icon" />
        <span className="sidebar-description">Cart</span>
      </div>
      <div className="sidebar-item" onClick={() => onJointSelect({ name: "Profile", description: "Your profile", rating: 4.2 })}>
        <Person className="sidebar-icon" />
        <span className="sidebar-description">Profile</span>
      </div>
      <div className="sidebar-item" onClick={() => onJointSelect({ name: "Dark Mode", description: "Toggle dark mode", rating: 4.0 })}>
        <WbSunny className="sidebar-icon" />
        <span className="sidebar-description">Dark Mode</span>
      </div>
    </div>
  );
};

export default Sidebar;