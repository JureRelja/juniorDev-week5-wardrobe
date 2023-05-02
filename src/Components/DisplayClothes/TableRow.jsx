import "./TableRow.css";
import EditItem from "./EditItem";
import SelectInput from "../NewClothes/SelectInput";
import ColorInput from "../NewClothes/ColorInput";
import { propertiesContext } from "../ClothesPropertiesContext";
import { clothesContext } from "../ClothesContext";

import { useState, useContext } from "react";

function TableRow({ item }) {
  const [edit, setEdit] = useState(false);

  const properties = useContext(propertiesContext);
  const clothes = useContext(clothesContext);

  const [newItem, setNewItem] = useState({
    typeOfClothes: item.typeOfClothes,
    brand: item.brand,
    size: item.size,
    color: item.color,
  });

  const submitHandler = () => {
    clothes.put(newItem, item.id);
  };

  const deleteHandler = () => {
    clothes.delete(item.id);
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleColors = (color) => {
    setNewItem({ ...newItem, color: color });
  };

  return (
    <tr className="body-row">
      {!edit ? (
        <>
          <td className="row">{item.typeOfClothes}</td>
          <td className="row">{item.brand}</td>
          <td className="row">{item.size}</td>
          <td className="row">{item.color}</td>
        </>
      ) : (
        <>
          <td className="row">
            <SelectInput
              data={properties.typeOfClothes}
              label="Type of clothes"
              noLabel={true}
              value={newItem.typeOfClothes}
              class={""}
              inputHandler={inputHandler}
              name="typeOfClothes"
            />
          </td>
          <td className="row">
            <SelectInput
              data={properties.brands}
              label="Brand"
              noLabel={true}
              value={newItem.brand}
              class={""}
              name="brand"
              inputHandler={inputHandler}
            />
          </td>
          <td className="row">
            <SelectInput
              data={properties.sizes}
              label="Size"
              noLabel={true}
              value={newItem.size}
              class={""}
              name="size"
              inputHandler={inputHandler}
            />
          </td>
          <td className="row">
            <ColorInput
              colors={properties.colors}
              class="edit-color"
              noLabel={true}
              value={newItem.color}
              name="color"
              handleColors={handleColors}
            />
          </td>
        </>
      )}
      <td className="buttons">
        <EditItem edit={edit} setEdit={setEdit} submitHandler={submitHandler} />
        {edit && (
          <button className="delete" onClick={deleteHandler}>
            Delete
          </button>
        )}
      </td>
    </tr>
  );
}

export default TableRow;
