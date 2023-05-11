import React, { useState } from "react";
import BeerList from "../pages/BeerList";

export default function RestaurantPage() {
  const [showBeerList, setShowBeerList] = useState(false);

  return (
    <div className="RestaurantPage">
      <h2>Restaurant Page</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img
            style={{ border: "2px dotted black", height: "200px", width: "200px" }}
            src=""
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
      {showBeerList && <BeerList />}
    </div>
  );
}
