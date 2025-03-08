import React from 'react';
import './Sidebar.css'; // Import the CSS file for sidebar styling
import { ShoppingCart, Person } from '@mui/icons-material'; // Import icons for cart and profile

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <ShoppingCart className="sidebar-icon" />
        <span className="sidebar-description">Cart</span>
      </div>
      <div className="sidebar-item">
        <Person className="sidebar-icon" />
        <span className="sidebar-description">Profile</span>
      </div>
    </div>
  );
};

export default Sidebar;