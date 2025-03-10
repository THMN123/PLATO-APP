import React from 'react';
import { ShoppingCart, Person, WbSunny } from '@mui/icons-material'; // Import icons for the tab bar
import './TabBar.css'; // Import the CSS file for tab bar styling

const TabBar = ({ onJointSelect }) => {
  return (
    <div className="tab-bar">
      <div className="tab-item" onClick={() => onJointSelect({ name: "Cart", description: "Your shopping cart", rating: 4.5 })}>
        <ShoppingCart />
        <span className="tab-description">Cart</span>
      </div>
      <div className="tab-item" onClick={() => onJointSelect({ name: "Profile", description: "Your profile", rating: 4.2 })}>
        <Person />
        <span className="tab-description">Profile</span>
      </div>
      <div className="tab-item" onClick={() => onJointSelect({ name: "Dark Mode", description: "Toggle dark mode", rating: 4.0 })}>
        <WbSunny />
        <span className="tab-description">Dark Mode</span>
      </div>
    </div>
  );
};

export default TabBar;