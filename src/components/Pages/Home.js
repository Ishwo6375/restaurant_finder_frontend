import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to Restaurant Finder.com</h1>
         <div>
            <p>New At Restaurant Business???</p>
            <p>Add your Restaurant to Our App</p>
            <p>Click Add Now to add your Restaurant</p>
            <Link className="btn btn-primary mx-3" to={"/add"}>Add Now!!</Link>
            </div>
        </div>
    )
}

export default Home
