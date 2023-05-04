import React, { useState, useEffect } from 'react';

//store and update beers
const BeerGarden = () => {
    const [beers, setBeers] = useState([]);


    //need model and path to test this part out
    useEffect(() => {
        fetch('/api/purchased_beers/')
            .then((response) => response.json())
            .then((data) => setBeers(data.beers));
    }, []);

    

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




    return (
        <div>
            <h1>Beer Garden - Purchased Beers</h1>
            <ul>
                {beers.map((beer, index) => (
                    <li key={index}>
                        <h2>{beer.name}</h2>
                        <img src={beer.img_url} alt={beer.name} />
                        <p>Rating: {beer.rating}</p>
                        <p>Details: {beer.details}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BeerGarden;