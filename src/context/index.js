import React, { createContext, useState, useEffect } from "react";
import setHeaders from "../utils/setHeaders";

const BreedsContext = createContext({ breeds: [] });
const BreedsProvider = ({ children }) => {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    async function getBreeds() {
      const url = "https://api.thecatapi.com/v1/breeds";
      const resp = await fetch(url, {
        method: "GET",
        headers: setHeaders({ "Content-Type": "application/json" }),
      });
      const data = await resp.json();
      setBreeds(data);
    }
    getBreeds();
  }, []);
  return (
    <BreedsContext.Provider value={{ breeds, setBreeds }}>
      {children}
    </BreedsContext.Provider>
  );
};
export { BreedsProvider, BreedsContext };
