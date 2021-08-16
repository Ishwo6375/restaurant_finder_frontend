import React, { useState, useEffect } from "react";
import  {useHistory } from 'react-router';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/EditRestaurant.css'

function EditRestaurant() {
  const baseURL = 'http://127.0.0.1:9393';
  const { id } = useParams();
  const history = useHistory();

  //seeting useState to hold data from form//
  //setting initial value to empty string//
  const [editRestaurant, setEditRestaurant] = useState({
    name: "",
    imaget: "",
    restaurant_type: "",
    location: "",
    contact: "",
  });
  //Array desturctiong//
  const { name, image, restaurant_type, location, contact } = editRestaurant;

  function onHandleChange(e) {
    setEditRestaurant({ ...editRestaurant, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    showRestaurantonForm();
    // eslint-disable-next-line
  }, []);

  function showRestaurantonForm() {
    fetch(`${baseURL}/restaurants/${id}`)
      .then((res) => res.json())
      .then((resData) => setEditRestaurant(resData));
  }

  //Patch method
  function onSubmitEditRestaurant(e) {
    e.preventDefault();
    fetch(`${baseURL}/restaurants/${id}`, {
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
        history.push(`/restaurants/${id}`)
      });
  }

  return (
    <>
      <div className="container1">
        <div>
          <h2 className="heading-style">Edit Restaurant</h2>

          <form onSubmit={onSubmitEditRestaurant}>
            <div className="login">
              <input
              className="input"
                type="text"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={onHandleChange}
              />
            </div>

            <div  className="login">
              <input
               className="input"
                type="text"
                placeholder="Enter UserName"
                name="image"
                value={image}
                onChange={onHandleChange}
              />
            </div>

            <div  className="login">
              <input
               className="input"
                type="text"
                placeholder="Enter E-mail Address"
                name="restaurant_type"
                value={restaurant_type}
                onChange={onHandleChange}
              />
            </div>

            <div className="login">
              <input
                className="input"
                type="text"
                placeholder="Enter Phone Number"
                name="location"
                value={location}
                onChange={onHandleChange}
              />
            </div>
            <div className="login">
              <input
                className="input"
                type="text"
                placeholder="Enter Image URL"
                name="contact"
                value={contact}
                onChange={onHandleChange}
              />
            </div>
            <br />

            <button className="btn-1">Update</button>

            <Link className="btn btn-secondary" to={`/restaurants/${id}`}>Go Back</Link>
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
