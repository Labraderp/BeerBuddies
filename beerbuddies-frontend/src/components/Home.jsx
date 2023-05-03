import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const RestaurantListing = ({ name, distance, onClick }) => (
  <div className="restaurant-listing">
  {/* Replace href with actual links */}
    <a href="https://example.com" target="_blank" onClick={onClick}>
      <h3>{name}</h3>
      <p>{distance} miles away</p>
    </a>
  </div>
);

// Fake restaurants/distance
const HomePage = () => {
  const [restaurants, setRestaurants] = useState([
    { name: 'Restaurant 1', distance: 1.5 },
    { name: 'Restaurant 2', distance: 0.5 },
    { name: 'Restaurant 3', distance: 2.0 },
  ]);

  const handleRestaurantClick = (name) => {
    alert(`You clicked on ${name}`);
  };

  const handleButtonClick = (destination) => {
    alert(`Navigating to ${destination}`);
  };

  return (
    <div className="home-page">
      <h1>Homepage</h1>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <RestaurantListing
            key={index}
            name={restaurant.name}
            distance={restaurant.distance}
            onClick={() => handleRestaurantClick(restaurant.name)}
          />
        ))}
      </div>
      {/* Use Link to be redirected to their component */}  
      {/* 
      <Link to="/buddy-list">Buddy List</Link>
      <Link to="/user-settings">User Settings</Link>
      <Link to="/beer-garden">Beer Garden</Link> */}
      <button onClick={() => handleButtonClick('Buddy List')}>Buddy List</button>
      <button onClick={() => handleButtonClick('User Settings')}>User Settings</button>
      <button onClick={() => handleButtonClick('Beer Garden')}>Beer Garden</button>
    </div>
  );
};

export default HomePage;
