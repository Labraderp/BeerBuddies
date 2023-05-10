import React, { useContext, useState } from 'react';
import '../App.css';
import { userContext } from '../App';
import Container from 'react-bootstrap/Container';
import BuddyList from '../pages/BuddyList';
import UserProfilePage from '../pages/UserProfilePage';
import BeerGarden from '../pages/BeerGarden'

import NavBar from './NavBar';

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
const Home = () => {
  const [restaurants, setRestaurants] = useState([
    { name: 'Restaurant 1', distance: 1.5 },
    { name: 'Restaurant 2', distance: 0.5 },
    { name: 'Restaurant 3', distance: 2.0 },
  ]);

  const { user, setUser } = useContext(userContext)
  const [features, setFeatures] = useState(0)

  const handleRestaurantClick = (name) => {
    alert(`You clicked on ${name}`);
  };


  return (
    <Container>
      <NavBar setFeatures={setFeatures}/>
    <div className="home">
      <h1>Homepage</h1>
    </div>
    <div>
      {(features == 1) ? 
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
      : <div />}
      {(features == 2) ? <BuddyList /> : <div />}
      {(features == 3) ? <UserProfilePage /> : <div />}
      {(features == 4) ? <BeerGarden /> : <div />}
    </div>
    </Container>
  );
};

export default Home;
