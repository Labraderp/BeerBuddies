import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function BeerList({ handleBeerClick }) {
  const beers = [
    {
      id: 100,
      name: "Light IPA",
      abv: "4.5% ABV",
      description: "A light beer with strong flavor"
    },
    {
      id: 102,
      name: "Strong Stout",
      abv: "8% ABV",
      description: "A heavy stout with peanut butter notes"
    },
    {
      id: 103,
      name: "Golden Lager",
      abv: "5% ABV",
      description: "Sweet golden nectar"
    },
    {
      id: 104,
      name: "Domestic",
      abv: "3.5% ABV",
      description: "America"
    },
    {
      id: 105,
      name: "Imported",
      abv: "4% ABV",
      description: "German, Belgian, Mexican, etc"
    }
  ];

  const handleItemClick = (id) => {
    const selectedBeer = beers.find((beer) => beer.id === id);
    handleBeerClick(selectedBeer);
  };

  return (
    <ListGroup defaultActiveKey="#">
      <h3>Take a look at our beer menu:</h3>
      {beers.map((beer) => (
        <ListGroup.Item
          key={beer.id}
          action
          onClick={() => handleItemClick(beer.id)}
        >
          {beer.name} -- {beer.abv}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
