import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FoodContainer.css"

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

//   // Implementing Delete//
//   function deleteRestaurant(menu) {
//     fetch(`http://127.0.0.1:9393/restaurants/${menu.id}`, {
//       method: "DELETE",
//     })
//         const newMenu = menus.filter((food) => food.id !== menu.id);
//         setMenu(newMenus);
//   }

  return (
    <>
          <label>Search</label>
          <div  className="Input-wrapper">
        <input
          type="text"
          placeholder="Search by food "
          className="Input-wrapper"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        </div>
      <div>
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
              <div >
                <div className="card-body restu">
                  <div className="card">
                  <img src={menu.image} alt="menu-pic card" />
                    <h2>{menu.food_name}</h2>
                    <p>Description:  {menu.description}</p>
                    <p>Price: {menu.price}</p>
                   
                   <Link className="btn btn-primary" to={`/restaurants/${menu.restaurant_id}`}>Restaurant Details</Link>
                
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
