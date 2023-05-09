// import ListGroup from 'react-bootstrap/ListGroup';

// function BeerList() {

//     const beers = [
//     {
//         name: "Light IPA",
//         abv: "4.5% ABV",
//         description: "A light beer with strong flavor"
//     },
//     {
//         name: "Strong Stout",
//         abv: "8% ABV",
//         description: "A heavy stout with peanut butter notes"
//     },
//     {
//         name: "Golden Lager",
//         abv: "5% ABV",
//         description: "Sweet golden nectar"
//     },
//     {
//         name: "Domestic",
//         abv: "3.5% ABV",
//         description: "America"
//     },
//     {
//         name: "Imported",
//         abv: "4% ABV",
//         description: "German, Belgian, Mexican, etc"
//     }
// ]

//   return (
//     <ListGroup>
//         <h2>test header</h2>
//         {
//             beers.map((beer)=> (
//                 <ListGroup.Item>{beer.name} -- {beer.abv}</ListGroup.Item>
//             ))
//         }
//     </ListGroup>
//   );
// }

// export default BeerList;

import ListGroup from 'react-bootstrap/ListGroup';

export default function BeerList() {

    const beers = [
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

  return (
    <ListGroup defaultActiveKey="#">
        <h3>Take a look at our beer menu:</h3>
        {
            beers.map((beer)=>(
                <ListGroup.Item action href="#/BeerPage">
                    {beer.name} -- {beer.abv}
                </ListGroup.Item>
            ))
        }
    </ListGroup>
  );
}
