import React from "react";
import { Link } from "react-router-dom";

function SearchList({ searchList = [], searchInput = "" }) {
  if (searchInput === "") {
    return null;
  }
  return (
    <div style={search__list}>
      {searchList.map((breed, i) => (
        <Link key={i} to={`/breeds/${breed.id}`} style={search__link}>
          {breed.name}
        </Link>
      ))}
    </div>
  );
}

export default SearchList;
const search__list = {
  position: "absolute",
  alignItems: "center",
  width: "100%",
  background: "#ffffff",
  height: "200px",
  zIndex: "1000",
  borderRadius: "24px",
  width: "374px",
  top: "440px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "10px",
  overflow: "scroll",
  overflowX: "hidden",
};
const search__link = {
  padding: "10px",
  width: "100%",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "22px",
  color: "#000000",
  cursor: "pointer",
  background: "rgba(151, 151, 151, 0.1)",
  borderRadius: "12px",
};
