import React, { useState } from "react";
import BeerList from "../pages/BeerList";
import BeerPage from "../pages/BeerPage";
import bar3 from "../images/bar3.jpeg"

export default function RestaurantPage({ handleBeerClick }) {
  const [showBeerList, setShowBeerList] = useState(false);
  const [showBeerPage, setShowBeerPage] = useState(false);

  const handleBeerListClick = () => {
    if (!showBeerPage) {
      setShowBeerPage(true)
    } else {
      setShowBeerPage(false)
    }
  };

  return (
    <div className="RestaurantPage">
      <h2>Restaurant Page</h2>
      <div style={{display: "flex", justifyContent:'space-between'}}>
        <div className="port_container" style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                style={{ maxHeight: "200px", maxWidth: "250px" }}
                src={bar3}
                alt=""
                placeholder="Restaurant Picture"
              />
              <div style={{ maxWidth: "500px" }}>
                <p>
                  Reviews:
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus veniam molestiae
                    tenetur sapiente quibusdam labore ipsum quam quasi perferendis magni nostrum
                    adipisci ad facilis, vel illum sequi?
                  </p>
                </p>
              </div>
            </div>
            <div>
              <h4>Restaurant Name</h4>
              <h4>Restaurant URL</h4>
              <button onClick={() => setShowBeerList(!showBeerList)}>Beer List</button>
            </div>
          </div>
          {showBeerList && <BeerList handleBeerClick={handleBeerListClick} />}
        </div>

        <div className="stbd_container">
          { showBeerPage ? <BeerPage/> : <div/> }
        </div>
      </div>
      

    </div>
  );
}
