import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import { decrementToken } from '../utilities';


//store and update beers
const BeerGarden = () => {
    const [beers, setBeers] = useState([]);
    const user_info = useContext(userContext)
    const navigate = useNavigate();

    const handleDecrementToken = async (beerId, beerName) => {
        try {
          const result = await decrementToken(user_info.user.handle);
          if (result) {
            const updatedUserContext = {
              ...user_info.user,
              token_amount: user_info.user.token_amount - 1,
            };
            user_info.setUser(updatedUserContext);
            navigate(createurl(beerId, beerName));

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
        description: "A light beer with strong flavor"
    },
    {
        id:102,
        name: "Strong Stout",
        abv: "8% ABV",
        description: "A heavy stout with peanut butter notes"
    },
    {
        id:103,
        name: "Golden Lager",
        abv: "5% ABV",
        description: "Sweet golden nectar"
    },
    {
        id:104,
        name: "Domestic",
        abv: "3.5% ABV",
        description: "America"
    },
    {
        id:105,
        name: "Imported",
        abv: "4% ABV",
        description: "German, Belgian, Mexican, etc"
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

    function createurl(beerid, beername) {
        console.log(beerid)
        return `/RedeemQR/${beerid}${beername}`
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
                        <img src={beer.img_url} alt={beer.name} />
                        <p>Rating: {beer.rating}</p>
                        <p>Details: {beer.details}</p>
                        <button onClick={() => handleDecrementToken(beer.id, beer.name)}>
                            Redeem Beer
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeerGarden;