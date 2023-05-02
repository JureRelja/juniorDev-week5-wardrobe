import React from "react";
import { useContext } from "react";
import "./App.css";
import NewClothes from "./Components/NewClothes/NewClothes";
import DisplayClothes from "./Components/DisplayClothes/DisplayClothes";
import ClothesPropertiesContext from "./Components/ClothesPropertiesContext";
import ClothesContext from "./Components/ClothesContext";

function App() {
  return (
    <div className="app">
      <h2>My Clothes</h2>
      <div className="container">
        <ClothesPropertiesContext>
          <ClothesContext>
            <NewClothes />
            <DisplayClothes />
          </ClothesContext>
        </ClothesPropertiesContext>
      </div>
    </div>
  );
}

export default App;
