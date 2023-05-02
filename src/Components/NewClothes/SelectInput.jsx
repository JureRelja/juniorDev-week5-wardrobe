import React from "react";
import "./SelectInput.css";

function SelectInput(props) {
  return (
    <div className={props.class}>
      {!props.noLabel && <label>{props.label}</label>}

      <select
        onChange={props.inputHandler}
        name={props.name}
        value={props.value}
        required
      >
        {!props.noLabel && <option value="">Select {props.label}</option>}
        {props.label === "Type of clothes"
          ? props.data.map((item) => (
              <option key={item.type} value={item.type}>
                {item.type}
              </option>
            ))
          : null}
        {props.label === "Brand"
          ? props.data.map((item) => (
              <option key={item.brand} value={item.brand}>
                {item.brand}
              </option>
            ))
          : null}

        {props.label === "Size"
          ? props.data.map((item) => (
              <option key={item.size} value={item.size}>
                {item.size}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}

export default SelectInput;
