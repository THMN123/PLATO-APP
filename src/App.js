import React from 'react';
import './App.css'; // Import your main CSS
import Navbar from './Navbar'; // Import the Navbar component
import Home from './Home'; // Assuming Home component is your main content

const App = () => {
  return (
    <div className="app">
      <Navbar /> {/* Add the Navbar at the top */}
      <Home /> {/* Your existing Home component */}
    </div>
  );
};

export default App;
