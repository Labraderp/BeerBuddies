import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import { decrementToken } from '../utilities';
import ipa from '../images/beers/ipa.jpeg'
import stout from '../images/beers/stout.jpg'
import lager from '../images/beers/lager.jpeg'
import domestic from '../images/beers/domestic.jpeg'
import imported from '../images/beers/imported.jpeg'


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

    //need model and path to test this part out
    // useEffect(() => {
    //     fetch('/api/purchased_beers/')
    //         .then((response) => response.json())
    //         .then((data) => setBeers(data.beers));
    // }, []);


// hardcoded beers until we build backend call to postgres
    const hardBeers = [
    {
        id:100,
        name: "Light IPA",
        abv: "4.5% ABV",
        description: "A light beer with strong flavor",
        img_url: ipa
    },
    {
        id:102,
        name: "Strong Stout",
        abv: "8% ABV",
        description: "A heavy stout with peanut butter notes",
        img_url: stout
    },
    {
        id:103,
        name: "Golden Lager",
        abv: "5% ABV",
        description: "Sweet golden nectar",
        img_url: lager
    },
    {
        id:104,
        name: "Domestic",
        abv: "3.5% ABV",
        description: "America",
        img_url: domestic
    },
    {
        id:105,
        name: "Imported",
        abv: "4% ABV",
        description: "German, Belgian, Mexican, etc",
        img_url: imported
    }
]
    

    //~~~~~~~~~~~~~~~~~~~possible model for beers~~~~~~~~~~~~~~~~
    // class PurchasedBeer(models.Model):
    // user = models.ForeignKey(App_User, on_delete=models.CASCADE)
    // name = models.CharField(max_length=255)
    // rating = models.DecimalField(max_digits=3, decimal_places=1)
    // details = models.TextField()
    // img_url = models.URLField()

    // def __str__(self):
    //     return self.name



    //~~~~~~~~~~~~~~views.py: function to retrieve list of purchased beers from user~~~~~~~~~~
    // def get_purchased_beers(request):
    //     beers = PurchasedBeer.objects.filter(user=request.user).values('name', 'rating', 'details', 'img_url')
    //     beer_list = list(beers)
    //     return JsonResponse({'beers': beer_list})


    //~~~~~~~~~~~~~possible urlpattern~~~~~~~~~~~~~~~~~~~~
    // path('api/purchased_beers/', views.get_purchased_beers, name='purchased_beers')

    function createurl(beerid, beername, userhandle) {
        console.log(beerid)
        return `/RedeemQR/${beerid}${beername}${userhandle}`
    }

    return (
        <div>
            <h1>Beer Garden - Purchased Beers</h1>
            <h2 style={{fontStyle: 'italic', color: 'green'}}>Available Tokens: {user_info.user.token_amount}</h2>
            <div>
                {/* these are hardcoded beers */}
                {hardBeers.map((beer, index) => (
                    <div key={index}>
                        <h2>{beer.name}</h2>
                        <div style={{display: 'flex', justifyContent: 'space-around', margin: '12px', padding: '5px'}}>
                            <div style={{height:"201px", width: "401px"}}>
                                <p>Rating: {beer.rating}</p>
                                <p>{beer.description}</p>
                                <button onClick={() => handleDecrementToken(beer.id, beer.name, user_info.user.handle)}>
                                    Redeem Beer
                                </button>
                            </div>
                            <div style={{height:"201px", width: "201px"}}>
                                <img style={{maxHeight:'200px', maxWidth: '200px'}}src={beer.img_url} alt={beer.name} />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeerGarden;