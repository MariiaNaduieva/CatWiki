import React from "react";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import BreedInfo from "./BreedInfo";

function Discover({ breeds }) {
  const breedList = breeds.sort((a, b) => 0.5 - Math.random()).slice(0, 4);
  return (
    <div style={discover}>
      <h4 style={h4}>Most Searched Breeds</h4>

      <div style={discover__line}></div>
      <div style={discover__info}>
        <h2 style={h2}>{breeds.length}+ Breeds For you to discover</h2>
        <div style={info__showmore}>
          <span style={info__seemore}>SEE MORE</span>
          <CgArrowLongRight />
        </div>
      </div>
      <div style={breeds__info}>
        {breedList.map((breed, i) => (
          <Link key={i} to={`/breeds/${breed.id}`}>
            <BreedInfo key={i} photoUrl={breed.image.url} title={breed.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Discover;

const discover = {
  display: "flex",
  flexDirection: "column",
  borderBottomLeftRadius: "46px",
  borderBottomRightRadius: "46px",
  background: "#e3e1dc",
  padding: "25px 107px 107px 145px",
};

const h4 = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "22px",
  color: "#291507",
  margin: 0,
};

const discover__line = {
  width: "59.18px",
  height: "3.21px",
  background: "#4d270c",
  borderRadius: "77px",
  marginTop: "8px",
};
const discover__info = {
  display: "flex",
  marginTop: "32px",
  justifyContent: "space-between",
};
const breeds__info = {
  display: "flex",
  marginTop: "58px",
  justifyContent: "space-between",
};
const h2 = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "48px",
  lineHeight: "59px",
  color: "#291507",
  width: "536.93px",
};
const info__showmore = {
  display: "flex",
  marginTop: "auto",
  alignItems: "center",
  gap: "5px",
  color: "rgba(41, 21, 7, 0.6)",
};
const info__seemore = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "18px",
  lineHeight: "22px",
  textAlign: "right",
  color: "rgba(41, 21, 7, 0.6)",
};
