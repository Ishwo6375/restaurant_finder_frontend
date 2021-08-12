import React, { useState } from "react";
import  {useHistory } from 'react-router';

function AddRestaurant() {
  const history = useHistory();
 
  //setting initial value as empty string to hold form data//
  const [formData, setformData] = useState({
    name: "",
    image: "",
    location: "",
    restaurant_type: "",
    contact: "",
  });

  function onHandleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  //Implementing POST method to add Employee
  function onSubmitAddRestaurant(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        location: formData.location,
        restaurant_type: formData.restaurant_type,
        contact: formData.contact,
      }),
    };

    fetch("http://127.0.0.1:9393/restaurants", config)
      .then((res) => res.json())
      .then((newRestaurant) => {
        const newRestaurants = [formData, newRestaurant];
        setformData(newRestaurants);
        history.push('/restaurants')
      });
  }

  return (
    <div>
      <div className="div-container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="add">Add New Restaurant</h2>

          <form>
            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Restaurant Name.."
                name="name"
                value={formData.name}
                onChange={onHandleChange}
              />
            </div>

            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Image URL.."
                name="image"
                value={formData.image}
                onChange={onHandleChange}
              />
            </div>

            <div>
              <input
                className="my-2"
                type="location"
                placeholder="Enter location.."
                name="location"
                value={formData.location}
                onChange={onHandleChange}
              />
            </div>

            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Restaurant Type.."
                name="restaurant_type"
                value={formData.restaurant_type}
                onChange={onHandleChange}
              />
            </div>

            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Contact Information.."
                name="contact"
                value={formData.contact}
                onChange={onHandleChange}
              />
            </div>

            <button onClick={onSubmitAddRestaurant} className="btn btn-secondary">
              New Restaurant
            </button>
             
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRestaurant;
