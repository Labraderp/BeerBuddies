import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import { decrementToken } from '../utilities';


//store and update beers
const BeerGarden = () => {
    const [beers, setBeers] = useState([]);
    const user_info = useContext(userContext)
    const navigate = useNavigate();

    const handleDecrementToken = async (beerId, beerName, userHandle ) => {
        try {
          const result = await decrementToken(user_info.user.handle);
          if (result) {
            const updatedUserContext = {
              ...user_info.user,
              token_amount: user_info.user.token_amount - 1,
            };
            user_info.setUser(updatedUserContext);
            navigate(createurl(beerId, beerName, userHandle));

          } else {
            console.error('Failed to decrement token amount.');
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      };

    // need model and path to test this part out
    useEffect(() => {
        const fetchBeers = async () => {
            const data = await fetch(`/api/purchased_beers/${user_info.user.handle}`)
            const json = await data.json();
            setBeers(json['beer']);
        }

        fetchBeers().catch(console.error);
    }, []);

    function createurl(beerid, beername, userhandle) {
        console.log(beerid)
        return `/RedeemQR/${beerid}${beername}${userhandle}`
    }
    return (
        <div>
            <h1>Beer Garden - Purchased Beers</h1>
            <div>
                {
                    (beers != []) ? beers.map((beer) => <h3>{beer.name}</h3>) : <div /> 
                }
                
            </div>
            <h2 style={{fontStyle: 'italic', color: 'green'}}>Available Tokens: {user_info.user.token_amount}</h2>
        </div>
    );
};

export default BeerGarden;