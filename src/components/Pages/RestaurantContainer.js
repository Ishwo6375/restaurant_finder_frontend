import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RestaurantContainer.css";

function RestaurantContainer() {
  //setting initial state to empty array//
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantDelete, setRestaurantDelete] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Implementing  GET method

  useEffect(() => {
    showRestaurants();
  }, []);

  function showRestaurants(){
     fetch('http://127.0.0.1:9393/restaurants')
      .then((res) => res.json())
      .then((Data) => setRestaurants(Data));
  }

  // Implementing Delete//
  function deleteRestaurant(restaurantId) {
    fetch(`http://127.0.0.1:9393/restaurants/${restaurantId}`, {
      method: "DELETE",
    }).then((res) => {
      res.json().then(() => {
        const newRestaurants = restaurants.filter((restaurant) => restaurant.id !== restaurantId);
        setRestaurantDelete(newRestaurants);
        showRestaurants();
      });
    });
  }

  return (
    <>
      <div>
        <div className="header">
          <label>Search</label>
        <input
          type="text"
          placeholder="Hungry?? Search Restaurant... "
          className="form-control search-input "
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
     
         {restaurants.filter(value =>{
              if (searchTerm === '') {
                return value;
              }else if(
                value.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                value.location.toLowerCase().includes(searchTerm.toLowerCase()) 
              )
              {
                return value
                }
                }).map((restaurant, idx) => (
              <div key={idx} className="restaurant-container">
              <div >
                <div className="card card-body">
                  <img src={restaurant.image} alt="restaurant-pic" />
                  <div className="card-body">
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant.restaurant_type}</p>
                    <p>{restaurant.location}</p>
                   <p>Contact: {restaurant.contact}</p>
                   <Link className="btn btn-primary" to={`/restaurants/RestaurantProfile/${restaurant.id}`}>Show Restaurant</Link>
                   <button
                      onClick={() => deleteRestaurant(restaurant.id)}
                      className="btn btn-danger mx-2"
                    >
                      Delete
                    </button>
                  </div>
                  
                </div>
              </div>
              </div>
            ))};
        </div>
      </div>
    </>
  );
}

export default RestaurantContainer;
