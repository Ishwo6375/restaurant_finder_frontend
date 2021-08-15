import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/RestaurantContainer.css";




function RestaurantContainer() {
    const baseURL = 'http://127.0.0.1:9393';
  //setting initial state to empty array//
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Implementing  GET method

  useEffect(() => {
    showRestaurants(); //This function is called every time delete method is requested//
  }, []);

  function showRestaurants() {
    fetch(`${baseURL}/restaurants`)
      .then((res) => res.json())
      .then((Data) => setRestaurants(Data));
  }

  // Implementing Delete//
  function deleteRestaurant(restaurant) {
    fetch(`${baseURL}/restaurants/${restaurant.id}`, {
      method: "DELETE",
    });
    const newRestaurants = restaurants.filter(
      (res) => res.id !== restaurant.id
    );
    setRestaurants(newRestaurants);
  }

  return (
    <>
      <div>
      <div className="Input-wrapper header">
      <label className="search">Search</label>
        <input
          type="text"
          placeholder="Hungry?? Search Restaurant... "
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
        <div className="header">
          {restaurants
            .filter((value) => {
              if (searchTerm === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                value.location
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                value.restaurant_type
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            }).map((restaurant, idx) => ( 
              <div key={idx} className="restaurant-container">
                <div>
                  <div className="card  rest">
                    <div className="card-body">
                      <img src={restaurant.image} alt="restaurant-pic" />
                      <h2>{restaurant.name}</h2>
                      <p>{restaurant.restaurant_type}</p>
                      <p>{restaurant.location}</p>
                      <p>Contact: {restaurant.contact}</p>
                      <Link
                        className="btn btn-primary"
                        to={`/restaurants/${restaurant.id}`}
                      >
                        Show Restaurant
                      </Link>
                      <button
                        onClick={() => deleteRestaurant(restaurant)}
                        className="btn btn-danger mx-2"> Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default RestaurantContainer;
