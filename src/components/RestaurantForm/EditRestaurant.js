import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditRestaurant(){
  const { id } = useParams();

//seeting useState to hold data from form//
  //setting initial value to empty string//
  const [editRestaurant, setEditRestaurant] = useState({
    name: "",
    contact: "",
    restaurant_type: "",
    location: "",
    contact:""
  });
 //Array desturctiong//
  const {name, image, restaurant_type, location , contact} = editRestaurant;

  function onHandleChange(e) {
    setEditRestaurant({ ...editRestaurant, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    showRestaurantonForm();
    // eslint-disable-next-line
  }, []);

  function showRestaurantonForm() {
   fetch(`http://127.0.0.1:9393/restaurants/${id}`)
      .then((res) => res.json())
      .then((resData) => setEditRestaurant(resData));
  }

  //Patch method
  function onSubmitEditRestaurant(e) {
    e.preventDefault();
    fetch(`http://127.0.0.1:9393/restaurants/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify(editRestaurant),
    })
      .then((res) => res.json())
      .then((newRestaurant) => {
        setEditRestaurant(newRestaurant);
      });
  }

  return (
    <>
      <div>
        <div>
          <h2 className="add-hire">Edit Restaurant</h2>

          <form onSubmit={onSubmitEditRestaurant}>
            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={onHandleChange}
              />
            </div>

            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter UserName"
                name="image"
                value={image}
                onChange={onHandleChange}
              />
            </div>

            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter E-mail Address"
                name="restaurant_type"
                value={restaurant_type}
                onChange={onHandleChange}
              />
            </div>

            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Phone Number"
                name="location"
                value={location}
                onChange={onHandleChange}
              />
            </div>
            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Image URL"
                name="contact"
                value={contact}
                onChange={onHandleChange}
              />
            </div>

            <button className="my-2 btn-primary">Update</button>
          </form>
        </div>
      </div>

      <br />

      {/* <Link className="btn btn-danger mx-3" to="/employee">
        Back to Records
      </Link> */}
    </>
  );

}

export default EditRestaurant;

