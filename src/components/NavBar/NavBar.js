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

      <div className="navlinks">
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>

        <NavLink className="nav-item" to="/restaurants">
          All Restaurants
        </NavLink>

        <NavLink className="nav-item" to="/menus">
          Search By Foods
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
