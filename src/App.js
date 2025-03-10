import React, { useState } from 'react';
import './App.css'; // Import your main CSS
import Navbar from './Navbar'; // Import the Navbar component
import Home from './Home'; // Assuming Home component is your main content
import Sidebar from './Sidebar'; // Use your provided Sidebar component
import TabBar from './TabBar'; // Import the TabBar component

const App = () => {
  const [selectedJoint, setSelectedJoint] = useState(null);

  const handleJointSelect = (joint) => {
    setSelectedJoint(joint);
  };

  const handleCloseModal = () => {
    setSelectedJoint(null);
  };

  return (
    <div className="app">
      <Navbar /> {/* Add the Navbar at the top */}
      <div className="main-content">
        <Sidebar onJointSelect={handleJointSelect} /> {/* Sidebar for larger screens */}
        <Home onJointSelect={handleJointSelect} />
      </div>
      <TabBar onJointSelect={handleJointSelect} /> {/* TabBar for mobile devices */}
      {selectedJoint && (
        <Modal joint={selectedJoint} onClose={handleCloseModal} />
      )}
    </div>
  );
};

// Modal Component
const Modal = ({ joint, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{joint.name}</h2>
        <p>{joint.description}</p>
        <p>Rating: {joint.rating} ⭐</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default App;