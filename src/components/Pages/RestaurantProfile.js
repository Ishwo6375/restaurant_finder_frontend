import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function RestaurantProfile() {
  const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:9393/restaurants/${id}`)
      .then((res) => res.json())
      .then((resData) => setRestaurant(resData));
  }, []);

  return (
    <div>
        <br />
        <h1>Restaurant Deatails</h1>
      <img src={restaurant.image} alt="restaurant-pic" />
      <h3>Restaurant Name: {restaurant.name}</h3>
      <p>Restaurant Type:{restaurant.restaurant_type}</p>
      <p>{restaurant.location}</p>
      <p>Contact: {restaurant.contact}</p>
    </div>
  );
}

export default RestaurantProfile;
