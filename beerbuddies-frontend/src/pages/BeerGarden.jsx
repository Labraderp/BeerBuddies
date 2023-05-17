import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import { ListGroup } from 'react-bootstrap';


//store and update beers
const BeerGarden = () => {
    const [beers, setBeers] = useState([]);
    const user_info = useContext(userContext)
    const navigate = useNavigate();

    

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
            <ListGroup>
            <ListGroup.Item>
                {
                    (beers != []) ? beers.map((beer) => <h3><Link to={createurl(beer.id, beer.name, user_info.user.handle)}>{beer.name}</Link></h3>) : <div /> 
                }
            </ListGroup.Item>    
            </ListGroup>
            <h2 style={{fontStyle: 'italic', color: 'green'}}>Available Tokens: {user_info.user.token_amount}</h2>
        </div>
    );
};

export default BeerGarden;