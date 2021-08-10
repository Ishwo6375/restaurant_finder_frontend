import './App.css';
import RestaurantContainer from './components/Pages/RestaurantContainer';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AddRestaurant from './components/RestaurantForm/AddRestaurant';

function App() {
  return (
    <div>
      <RestaurantContainer />
      <AddRestaurant />
    </div>
  );
}

export default App;
