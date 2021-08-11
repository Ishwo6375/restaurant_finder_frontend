import React from "react";
import { NavLink} from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav className="nav-bar">
          <h2>Restaurant Finder.com</h2>
          <NavLink className="nav-items" to="/">
              Home
          </NavLink>
          <NavLink className="nav-items" to="/restaurants">
              All Restaurants
          </NavLink>
          <NavLink className="nav-items" to="/add">
              New Restaurants
          </NavLink>
          <NavLink className="nav-items" to="/menus">
              All foods
          </NavLink>
         
      </nav>
    </div>
  );
}

export default NavBar;
