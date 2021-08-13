import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Home.css'

function Home() {
    return (
    <div className="homepage-container">
        <div>
         <div className="homepage-items">
            <h1 className="home-head">Welcome to Restaurant Finder.com</h1>
             <p className="home-hp">Find your desired Restaurant...</p>
            <p className="home-p">New At Restaurant Business???</p>
            <p className="home-p">Add your Restaurant to Our App</p>
            <p className="home-p">Click Add Now to add your Restaurant</p>
            <Link className="btn btn-secondary home-link" to={"/add"}>Add Now!!!</Link>
         </div>
        </div>
        </div>
    )
}

export default Home
