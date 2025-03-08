import React from 'react';
import './App.css'; // Import the common CSS file
import REACTLOGO from './images/kfc-logo.png';
import REACTLOGO2 from './images/mcdonalds-logo.png';
import KFCBURGER from './images/kfc-burger.png'; // Placeholder for KFC burger image
import BIGMAC from './images/big-mac.png'; // Placeholder for Big Mac image
import CHICKENSANDWICH from './images/chicken-sandwich.png'; // Placeholder for Chicken Sandwich image
import MCVEGGIE from './images/mc-veggie.png'; // Placeholder for McVeggie image
import FAMILYBUCKET from './images/family-bucket.png'; // Placeholder for Family Bucket image
import HAPPYMEAL from './images/happy-meal.png'; // Placeholder for Happy Meal image
import Sidebar from './Sidebar'; // Import the Sidebar component

const fastFoodJoints = [
  { 
    id: 1, 
    name: 'KFC', 
    logo: REACTLOGO, // Path to the KFC logo
    description: 'Famous for fried chicken and delicious sides.', // Short description
    rating: 4.5, // Rating of the shop
  },
  { 
    id: 2, 
    name: "McDonald's", 
    logo: REACTLOGO2, // Path to the McDonald's logo
    description: 'Iconic burgers and golden fries.', // Short description
    rating: 4.2, // Rating of the shop
  },
];

const popularMenuItems = [
  { id: 1, name: 'Zinger Burger', description: 'Spicy chicken burger', joint: 'KFC', image: KFCBURGER },
  { id: 2, name: 'Big Mac', description: 'Classic burger with special sauce', joint: "McDonald's", image: BIGMAC },
];

const newMenuItems = [
  { id: 1, name: 'Chicken Sandwich', description: 'Crispy chicken sandwich', joint: 'KFC', image: CHICKENSANDWICH },
  { id: 2, name: 'McVeggie', description: 'Delicious vegetarian burger', joint: "McDonald's", image: MCVEGGIE },
];

const greatDealsItems = [
  { id: 1, name: 'Family Bucket', description: 'Perfect for sharing', joint: 'KFC', image: FAMILYBUCKET },
  { id: 2, name: 'Happy Meal', description: 'Meal with a toy for kids', joint: "McDonald's", image: HAPPYMEAL },
];

const Home = ({ onJointSelect }) => {
  return (
    <div className="home-wrapper"> {/* Add a wrapper for additional styling */}
      <Sidebar /> {/* Add the Sidebar component */}
      <div className="content"> {/* Ensure the content is in a separate div */}
        <h2 style={{ paddingTop: '20px' }}>Select a Fast Food Joint</h2>
        <div className="joint-grid">
          {fastFoodJoints.map((joint) => (
            <div 
              key={joint.id} 
              className="card" 
            >
              <img src={joint.logo} alt={joint.name} className="joint-logo" />
              <h3>{joint.name}</h3>
              <p>{joint.description}</p> {/* Short description */}
              <p>Rating: {joint.rating} ⭐</p> {/* Rating display */}
              <button className="order-button" onClick={() => onJointSelect(joint)}>Order Now</button> {/* Order Now button */}
            </div>
          ))}
        </div>

        <h2 style={{ paddingTop: '40px' }}>What's Popular</h2>
        <div className="joint-grid">
          {popularMenuItems.map(item => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="joint-logo" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>From: {item.joint}</p>
              <button className="order-button">See in Store</button> {/* See in Store button */}
            </div>
          ))}
        </div>

        <h2 style={{ paddingTop: '40px' }}>Try Something New</h2>
        <div className="joint-grid">
          {newMenuItems.map(item => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="joint-logo" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>From: {item.joint}</p>
              <button className="order-button">See in Store</button> {/* See in Store button */}
            </div>
          ))}
        </div>

        <h2 style={{ paddingTop: '40px' }}>Great Deals</h2>
        <div className="joint-grid">
          {greatDealsItems.map(item => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="joint-logo" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>From: {item.joint}</p>
              <button className="order-button">See in Store</button> {/* See in Store button */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;