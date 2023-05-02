import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const clothesContext = createContext({
  clothes: [],
});
export { clothesContext };

const ClothesContext = (props) => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/clothes").then((response) => {
      setClothes(response.data);
    });
  }, []);

  const updateClothes = (newItem) => {
    axios.post("http://localhost:3001/clothes", newItem).then((rez) => {
      setClothes((clothes) => [...clothes, rez.data]);
    });
  };

  const putClothes = (item, id) => {
    axios.put(`http://localhost:3001/clothes/${id}`, item);
    setClothes((clothes) => {
      const newClothes = clothes.map((clothe) => {
        if (clothe.id === id) {
          return item;
        } else {
          return clothe;
        }
      });
      return newClothes;
    });
  };

  const deleteClothes = (id) => {
    axios.delete(`http://localhost:3001/clothes/${id}`);
    setClothes((clothes) => {
      const newClothes = clothes.filter((clothe) => clothe.id !== id);
      return newClothes;
    });
  };

  return (
    <clothesContext.Provider
      value={{
        clothes: clothes,
        update: updateClothes,
        put: putClothes,
        delete: deleteClothes,
      }}
    >
      {props.children}
    </clothesContext.Provider>
  );
};

export default ClothesContext;
