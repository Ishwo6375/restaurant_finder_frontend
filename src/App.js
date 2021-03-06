import "./App.css";
import RestaurantContainer from "./components/Pages/RestaurantContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AddRestaurant from "./components/RestaurantForm/AddRestaurant";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import RestaurantProfile from "./components/Pages/RestaurantProfile";
import EditRestaurant from "./components/RestaurantForm/EditRestaurant";
import FoodContainer from "./components/Pages/FoodContainer";
import Order from "./components/Pages/Order";
import AddFoodItems from "./components/RestaurantForm/AddFoodItem";
import ContactForm from "./components/RestaurantForm/ContactForm";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/restaurants">
            <RestaurantContainer />
          </Route>
          <Route exact path="/restaurants/:id">
            <RestaurantProfile />
          </Route>
          <Route exact path="/add">
            <AddRestaurant />
          </Route>
          <Route exact path="/restaurants/edit/:id">
            <EditRestaurant />
          </Route>
          <Route exact path="/foods">
            <FoodContainer />
          </Route>
          <Route exact path="/Orders">
            <Order />
          </Route>
          <Route exact path="/addfooditem">
            <AddFoodItems />
          </Route>
           <Route exact path="/contacts">
            <ContactForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
