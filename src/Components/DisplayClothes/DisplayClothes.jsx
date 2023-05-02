import React from "react";
import "./DisplayClothes.css";
import TableRow from "./TableRow";
import { clothesContext } from "../ClothesContext";
import { useContext } from "react";

function DisplayClothes() {
  const clothes = useContext(clothesContext);

  return (
    <div className="display-clothes">
      <table className="table">
        <thead className="thead">
          <tr className="head-row">
            <th className="row">Type</th>
            <th className="row">Brand</th>
            <th className="row">Size</th>
            <th className="row">Color</th>
            <th className="row">Edit</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {clothes.clothes.map((item) => (
            <TableRow item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayClothes;
