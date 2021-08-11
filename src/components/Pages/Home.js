import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Home.css'

function Home() {
    return (
        <div className="main-page">
            <h1>Welcome to Restaurant Finder.com</h1>
         <div className="homepage-items">
            <p>New At Restaurant Business???</p>
            <p>Add your Restaurant to Our App</p>
            <p>Click Add Now to add your Restaurant</p>
            <Link className="btn btn-secondary" to={"/add"}>Add Now!!</Link>
         </div>
        </div>
    )
}

export default Home
