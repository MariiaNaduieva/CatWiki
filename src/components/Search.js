import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchList from "./SearchList";

function Search({ breeds }) {
  const [searchInput, setSearchInput] = useState("");
  const filteredData = breeds.filter((el) => {
    if (searchInput === "") {
      return el;
    }
    return el.name.toLowerCase().includes(searchInput);
  });

  return (
    <div style={search}>
      <div style={search__input}>
        <input
          style={input_field}
          type="text"
          placeholder="Enter your breed"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <AiOutlineSearch color="black" size={"24px"} style={{ margin: 10}} />
      </div>
      <SearchList searchList={filteredData} searchInput={searchInput} />
    </div>
  );
}

export default Search;

const search = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};
const search__input = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  background: "#ffffff",
  borderRadius: "59px",
  color: "#291507",
  padding: "8px",
};
const input_field = {
  flex: "1",
  width: "300px",
  border: "none",
  marginLeft: 10,
  
};


