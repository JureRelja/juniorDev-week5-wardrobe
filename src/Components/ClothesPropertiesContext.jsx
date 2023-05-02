import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const propertiesContext = createContext({});
export { propertiesContext };

const ClothesContext = (props) => {
  const [typeOfClothes, setTypeOfClothes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/typeOfClothes"),
      axios.get("http://localhost:3001/brands"),
      axios.get("http://localhost:3001/sizes"),
      axios.get("http://localhost:3001/colors"),
    ]).then(
      ([
        typeOfClothesResponse,
        brandsResponse,
        sizesResponse,
        colorsResponse,
      ]) => {
        setTypeOfClothes(typeOfClothesResponse.data);
        setBrands(brandsResponse.data);
        setSizes(sizesResponse.data);
        setColors(colorsResponse.data);
      }
    );
  }, []);

  return (
    <propertiesContext.Provider
      value={{ typeOfClothes, brands, colors, sizes }}
    >
      {props.children}
    </propertiesContext.Provider>
  );
};

export default ClothesContext;
