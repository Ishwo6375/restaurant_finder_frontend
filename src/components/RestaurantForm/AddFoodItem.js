import React, { useState } from "react";
import  {useHistory } from 'react-router';


function AddFoodItems() {
  const history = useHistory();

  //setting initial value as empty string to hold form data//
  const [foodItems, setFoodItems] = useState({
    food_name: "",
    image: "",
    description: "",
    price: "",
    restaurant_id: "",
  });

  const { food_name, image, description, price, restaurant_id } = foodItems;

  function onHandleChange(e) {
    setFoodItems({ ...foodItems, [e.target.name]: e.target.value });
  }

  //Implementing POST method to add Employee
  function onSubmitAddFoodItem(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodItems ),
    };

    fetch("http://127.0.0.1:9393/menus", config)
      .then((res) => res.json())
      .then((newFoodItem) => {
        const newFoodItems = [foodItems, newFoodItem];
        setFoodItems(newFoodItems);
         history.push('/menus')
      });
  }

  return (
    <div>
      <div className="div-container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="add">Add New Food Item</h2>

          <form>
            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Food Name"
                name="food_name"
                value={food_name}
                onChange={onHandleChange}
              />
            </div>

            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Image URL.."
                name="image"
                value={image}
                onChange={onHandleChange}
              />
            </div>

            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Description"
                name="description"
                value={description}
                onChange={onHandleChange}
              />
            </div>

            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Price"
                name="price"
                value={price}
                onChange={onHandleChange}
              />
            </div>

            <div>
              <input
                className="my-2"
                type="number"
                placeholder="Enter your Restaurant ID..."
                name="restaurant_id"
                value={restaurant_id}
                onChange={onHandleChange}
              />
            </div>

            <button className="btn btn-secondary" onClick={onSubmitAddFoodItem}>
              Add Food Item
            </button>
    
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFoodItems;
