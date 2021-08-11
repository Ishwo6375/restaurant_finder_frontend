import React from "react";
import { NavLink} from "react-router-dom";
import './NavBar.css'
function NavBar() {
  return (
    <div className="nav-bar">
     <nav className="nav-items">
          <h2>Restaurant Finder.com</h2>
          <NavLink className="nav-items" to="/">
              Home
          </NavLink>
          <NavLink className="nav-items" to="/restaurants">
              All Restaurants
          </NavLink>
          <NavLink className="nav-items" to="/menus">
             Search By Foods
          </NavLink>
         
      </nav>
    </div>
  );
}

export default NavBar;
