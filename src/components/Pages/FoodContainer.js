import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/FoodContainer.css"

function RestaurantContainer() {
  //setting initial state to empty array//
  const [menus, setMenus] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Implementing  GET method

  useEffect(() => {
    showMenus();
  }, []);

  function showMenus(){
     fetch('http://127.0.0.1:9393/menus')
      .then((res) => res.json())
      .then((Data) => setMenus(Data));
  }

  //Implementing Delete//
  function deleteFood(menu) {
    fetch(`http://127.0.0.1:9393/menus/${menu.id}`, {
      method: "DELETE",
    })
        const newMenu = menus.filter((food) => food.id !== menu.id);
        setMenus(newMenu);
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
         {menus.filter(value =>{
              if (searchTerm === '') {
                return value;
              }else if(
                value.food_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                value.description.toLowerCase().includes(searchTerm.toLowerCase())||
                value.price.toLowerCase().includes(searchTerm.toLowerCase())
              )
              {
                return value
                }
                }).map((menu, idx) => (
              <div key={idx}>
              <div className="card rest">
                <div className="card-body">
                  <div>
                  <img src={menu.image} alt="menu-pic card" />
                    <h2>{menu.food_name}</h2>
                    <p>Description:  {menu.description}</p>
                    <p>Price: {menu.price}</p>
                   
                  </div>
                   <Link className="btn btn-primary" to={`/restaurants/${menu.restaurant_id}`}>Restaurant Details</Link>
                    <Link className="btn btn-primary mx-3" to={"/Orders"}>Order Now</Link>
                     <button
                        onClick={() => deleteFood(menu)}className="btn btn-danger mx-2">
                        Delete</button>
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
