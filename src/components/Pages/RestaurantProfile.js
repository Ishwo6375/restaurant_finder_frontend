import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/Restaurant.css";


function RestaurantProfile() {
  const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();
  

  useEffect(() => {
    fetch(`http://127.0.0.1:9393/restaurants/${id}`)
      .then((res) => res.json())
      .then((resData) => setRestaurant(resData));
      // eslint-disable-next-line
  }, []);

  

   

  return (
    <div className="res-profile">
       
      {restaurant && (
      <>
      <div className="profile-card">
          <h1>Restaurant Details</h1>
          <img className="img-fluid" src={restaurant.image} alt="restaurant-pic"/>
          <h2>Restaurant Name: {restaurant.name}</h2>
          <h3>Restaurant Type: {restaurant.restaurant_type}</h3>
          <h5>{restaurant.location}</h5>
          <h5>Contact: {restaurant.contact}</h5>
          <div>
             <Link className="btn btn-primary mx-3" to={`/restaurants/edit/${restaurant.id}`}>Edit Restaurant</Link>
          </div>
          </div>
         
           
          
    </>
      )}
     
    </div>
  );
}

export default RestaurantProfile;
