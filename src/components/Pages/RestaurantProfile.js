import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index";

function RestaurantProfile() {
  const [restaurant, setRestaurant] = useState([])
  const {id} = useParams();

  useEffect(() =>{
   fetch(`http://127.0.0.1:9393/restaurants${id}`)
   .then(res => res.json())
   .then((resData) => setRestaurant(resData));
  }, []);

  
    return (
        <div>
            <>
                <img src={restaurant.image} alt="restaurant-pic" />
                <p>Restaurant Name: {restaurant.name}</p>
                <p>Restaurant Type:{restaurant.restaurant_type}</p>
            </>
          
        </div>
        
    );
}

export default RestaurantProfile
