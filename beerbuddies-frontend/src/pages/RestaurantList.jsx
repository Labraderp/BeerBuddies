// import React, { useContext, useState } from 'react';
// import '../App.css';
// import { userContext } from '../App';

// const RestaurantListing = ({ name, distance, onClick }) => (
//   <div className="restaurant-listing">
//   {/* Replace href with actual links */}
//     <a href="https://example.com" target="_blank" onClick={onClick}>
//       <h3>{name}</h3>
//       <p>{distance} miles away</p>
//     </a>
//   </div>
// );

// // Fake restaurants/distance
// const RestaurantList = () => {
//   const [restaurants, setRestaurants] = useState([
//     { name: 'Restaurant 1', distance: 1.5 },
//     { name: 'Restaurant 2', distance: 0.5 },
//     { name: 'Restaurant 3', distance: 2.0 },
//   ]);

//   const { setUser } = useContext(userContext)

//   const handleRestaurantClick = (name) => {
//     alert(`You clicked on ${name}`);
//   };


//   return (
//     <div className="home">
//       <h1>Restaurant List</h1>
//       <div className="restaurant-list">
//         {restaurants.map((restaurant, index) => (
//           <RestaurantListing
//             key={index}
//             name={restaurant.name}
//             distance={restaurant.distance}
//             onClick={() => handleRestaurantClick(restaurant.name)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantList;

import ListGroup from 'react-bootstrap/ListGroup';

export default function RestaurantList() {

        const restaurants = [
    {
        name: "Restaurant A",
        distance: "5.0 miles",
    },
    {
        name: "Restaurant B",
        distance: "1.7 miles",
    },
    {
        name: "Restaurant C",
        distance: "3.6 miles",
    },
    {
        name: "Restaurant D",
        distance: "0.5 miles",
    },
    {
        name: "Restaurant E",
        distance: "1.2 miles",
    }
]

  return (
    <ListGroup defaultActiveKey="#">
        <h3>Restaurants in the area:</h3>
        {
            restaurants.map((restaurants)=>(
                <ListGroup.Item action href="#/RestaurantPage">
                    {restaurants.name} -- {restaurants.distance}
                </ListGroup.Item>
            ))
        }
    </ListGroup>
  );
}