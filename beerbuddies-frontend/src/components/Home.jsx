import React, { useContext, useState } from 'react';
import '../App.css';
import { userContext } from '../App';
import Container from 'react-bootstrap/Container';
import BuddyList from '../pages/BuddyList';
import UserProfilePage from '../pages/UserProfilePage';
import BeerGarden from '../pages/BeerGarden';
import RestaurantPage from '../pages/RestaurantPage';
import BeerList from '../pages/BeerList';
import BeerPage from '../pages/BeerPage';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { Welcome } from './Welcome';

const RestaurantListing = ({ name, distance, onClick }) => (
  <div className="restaurant-listing" onClick={onClick}>
    <h3>{name}</h3>
    <p>{distance} miles away</p>
  </div>
);

const Home = () => {
  const [restaurants, setRestaurants] = useState([
    { name: 'Restaurant 1', distance: 1.5 },
    { name: 'Restaurant 2', distance: 0.5 },
    { name: 'Restaurant 3', distance: 2.0 },
  ]);

  const { user, setUser } = useContext(userContext);
  const [features, setFeatures] = useState(0);
  const [showBeerPage, setShowBeerPage] = useState(false);

  const handleRestaurantClick = (name) => {
    // alert(`You clicked on ${name}`);
    setFeatures(5);
  };

  const handleBeerClick = () => {
    setShowBeerPage(true);
  };

  const handleFeatureClick = (featureNumber) => {
    setFeatures(featureNumber);
    setShowBeerPage(false);
  };

  return (
    <Container>
      <NavBar setFeatures={handleFeatureClick} />
      <div className="home">
        {features == 0 && (<Welcome/>
        )}
      </div>
      <div>
        {features === 1 && (
          <div className="restaurant-list">
            {restaurants.map((restaurant, index) => (
              <Link to="#" key={index}>
                <RestaurantListing
                  name={restaurant.name}
                  distance={restaurant.distance}
                  onClick={() => handleRestaurantClick(restaurant.name)}
                />
              </Link>
            ))}
          </div>
        )}
        {features === 2 ? <BuddyList /> : null}
        {features === 3 ? <UserProfilePage /> : null}
        {features === 4 ? <BeerGarden /> : null}
        {features === 5 ? <RestaurantPage handleBeerClick={handleBeerClick} /> : null}
        {showBeerPage && <BeerPage />}
      </div>
    </Container>
  );
};

export default Home;
