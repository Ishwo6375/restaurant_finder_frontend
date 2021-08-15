import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import "../styles/FoodContainer.css"

function RestaurantContainer() {
  const baseURL = 'http://127.0.0.1:9393';
  //setting initial state to empty array//
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Implementing  GET method

  useEffect(() => {
    showFoods();
  }, []);

  function showFoods(){
     fetch(`${baseURL}/foods`)
      .then((res) => res.json())
      .then((Data) => setFoods(Data));
  }

  //Implementing Delete//
  function deleteFood(food) {
    fetch(`${baseURL}/foods/${food.id}`, {
      method: "DELETE",
    })
        const newFood = foods.filter((foodItem) => foodItem.id !== food.id);
        setFoods(newFood);
  }

  return (
    <>
          <div  className="Input-wrapper header">
          <label className="search">Search</label>
        <input 
          type="text"
          placeholder="Search by food.. "
          className="input"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        </div>
      <div >
        <div className="header">
         {foods.filter(value =>{
              if (searchTerm === '') {
                return value;
              }else if(
                value.food_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                value.description.toLowerCase().includes(searchTerm.toLowerCase())
            
              )
              {
                return value
                }
                }).map((foodItem, idx) => (
              <div key={idx}>
              <div className="card rest">
                <div className="card-body">
                  <div>
                  <img src={foodItem.image} alt="menu-pic card" />
                    <h2>{foodItem.food_name}</h2>
                    <p>Description:  {foodItem.description}</p>
                    <p>Price: {foodItem.price}</p>
                   
                  </div>
                   <Link className="btn btn-secondary" to={`/restaurants/${foodItem.restaurant_id}`}>Restaurant</Link>
                    <Link className="btn btn-primary mx-3" to={"/Orders"}>Order Online</Link>
                     <button
                        onClick={() => deleteFood(foodItem)}className="btn btn-danger mx-2">
                       <BsTrash /></button>
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
