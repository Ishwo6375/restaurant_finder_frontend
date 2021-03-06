import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import "../styles/Restaurant.css";


function RestaurantProfile() {
  const baseURL = 'http://127.0.0.1:9393';
     
 //setting useState to hold data from Get request//
  const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();
  
 //Get Request by id//
  useEffect(() => {
    fetch(`${baseURL}/restaurants/${id}`)
      .then((res) => res.json())
      .then((resData) => setRestaurant(resData));
      // eslint-disable-next-line
  }, []);

  return (
    <div className="res-profile">
       
      {restaurant && (
      <>
      <div className="profile-card">
      <Link className="btn btn-secondary mx-4" to={"/restaurants"}>Back To Restaurants</Link>
       <Link className="btn btn-secondary" to={"/foods"}>Go To Foods</Link>
      <br />
          <h1>Restaurant Details</h1>
          <img className="res-pic" src={restaurant.image} alt="restaurant-pic"/>
          <h2>Restaurant Name: {restaurant.name}</h2>
          <h3>Restaurant Type: {restaurant.restaurant_type}</h3>
          <h4>Location: {restaurant.location}</h4>
          <h4>Contact: {restaurant.contact}</h4>
              <Link className="btn btn-primary mx-3" to={`/restaurants/edit/${restaurant.id}`}>Edit Restaurant</Link>
              <Link className="btn btn-secondary" to={"/addfooditem"}>Add Food Items!!</Link>
          </div>
          <div className="btn-links">
          </div>
    </>
      )}
     
    </div>
  );
}

export default RestaurantProfile;
