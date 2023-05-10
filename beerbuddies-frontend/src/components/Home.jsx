import React, { useContext, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { signOut } from '../utilities';
import { userContext } from '../App';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

  const handleRestaurantClick = (name) => {
    alert(`You clicked on ${name}`);
  };


  return (
    <Container>
      <NavBar />
    <div className="home">
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
      <Link to="/RestaurantList"> RestaurantList| </Link>
      <Link to="/BuddyList"> BuddyList| </Link>
      <Link to="/UserProfilePage"> ProfilePage|  </Link>
      <Link to="/BeerGarden"> BeerGarden </Link>
    </div>
    </Container>
  );
};

export default Home;
