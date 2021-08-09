import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constraints/index";
import "./RestaurantContainer.css";

function RestaurantContainer() {
  //setting initial state to empty array//
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "restaurants")
      .then((res) => res.json())
      .then((Data) => setRestaurants(Data));
  }, []);

  const showRestaurants = restaurants.map((restaurant) => (
    <div className="restaurant-container">
      <div>
        <h2 className="title">Name: {restaurant.name}</h2>
      </div>
      <div className="image">
        <img src={restaurant.image} alt="restaurant-pic" />
      </div>
      <div>
        <h3 className="type">Type: {restaurant.restaurant_type}</h3>
      </div>
      <div>
        <h4 className="location">location: {restaurant.location}</h4>
      </div>
       <div>
        <h4 className="contact">Contact: {restaurant.contact}</h4>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>All Restaurants</h1>
      {showRestaurants}
    </div>
  );
}

export default RestaurantContainer;
