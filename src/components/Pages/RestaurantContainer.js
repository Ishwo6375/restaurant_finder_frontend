import React, { useState , useEffect} from 'react';
import {BASE_URL} from '../constraints/index';

function RestaurantContainer() {

     //setting initial state to empty array//
     const [restaurants, setRestaurants] = useState([]);

     useEffect(()=>{
      fetch(BASE_URL + "restaurants")
      .then(res => res.json())
      .then((Data) => setRestaurants(Data))
     }, []);

    
     
    return (
        <div>


            
        </div>
    )
}

export default RestaurantContainer
