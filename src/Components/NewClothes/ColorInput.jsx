import React from "react";
import Circle from "@uiw/react-color-circle";
import "./ColorInput.css";

function ColorInput(props) {
  function handleColors() {
    const colors = props.colors.map((color) => {
      return color.hex;
    });
    return colors;
  }

  return (
    <div className={props.class}>
      {!props.noLabel && <label>Color</label>}

      <Circle
        colors={handleColors()}
        color={props.value}
        onChange={(color) => props.handleColors(color.hex)}
      />
    </div>
  );
}

export default ColorInput;
