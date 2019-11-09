import React from "react";
import RestaurantListBuilder from "../RestuarantListBuilder";
import NavBar from "../NavBar";
import "./App.scss";

const App: React.FC = () => (
  <div className="app">
    <NavBar />
    <RestaurantListBuilder />
  </div>
);

export default App;
