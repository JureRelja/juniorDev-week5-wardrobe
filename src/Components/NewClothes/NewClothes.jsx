import SelectInput from "./SelectInput";
import ColorInput from "./ColorInput";
import "./NewClothes.css";
import { useContext, useState } from "react";
import { propertiesContext } from "../ClothesPropertiesContext";
import { clothesContext } from "../ClothesContext";
import axios from "axios";

function NewClothes() {
  const properties = useContext(propertiesContext);
  const clothes = useContext(clothesContext);

  const [newItem, setNewItem] = useState({
    typeOfClothes: "",
    brand: "",
    size: "",
    color: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      newItem.typeOfClothes === "" ||
      newItem.brand === "" ||
      newItem.size === "" ||
      newItem.color === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    clothes.update(newItem);
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleColors = (color) => {
    setNewItem({ ...newItem, color: color });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <SelectInput
        data={properties.typeOfClothes}
        label="Type of clothes"
        class="select-input"
        name="typeOfClothes"
        noLabel={false}
        value={newItem.typeOfClothes}
        inputHandler={inputHandler}
      />
      <SelectInput
        data={properties.brands}
        label="Brand"
        class="select-input"
        name="brand"
        noLabel={false}
        value={newItem.brand}
        inputHandler={inputHandler}
      />
      <SelectInput
        data={properties.sizes}
        label="Size"
        name="size"
        class="select-input"
        noLabel={false}
        value={newItem.size}
        inputHandler={inputHandler}
      />
      <ColorInput
        colors={properties.colors}
        noLabel={false}
        name="color"
        value={newItem.color}
        handleColors={handleColors}
        class="input-color"
      />
      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
}

export default NewClothes;
