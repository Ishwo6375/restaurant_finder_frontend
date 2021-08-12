import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav>
      <div className="logo">
        <i className="fas fa-mountain"></i>
        <h4>Restaurant Finder.com</h4>
      </div>
      <ul className="navlinks">
        <li>
         <NavLink className="nav-item" to="/">
              Home
            </NavLink>
            </li>
             <li>
            <NavLink className="nav-item" to="/restaurants">
              All Restaurants
            </NavLink>
            </li>
             <li>
            <NavLink className="nav-item" to="/menus">
              Search By Foods
            </NavLink>
             </li>
      </ul>
    </nav>
  );
}

export default NavBar;
