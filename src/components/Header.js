import React from "react";
import herologo from "../images/HeroImagelg.png";
import Search from "./Search";

function Header({ breeds }) {
  return (
    <div style={header}>
      <div style={header__title}>
        <span style={span}>CatWiki</span>
      </div>
      <h2 style={header__desc}>Get to know more about your cat breed</h2>
      <div style={header__search}>
        <Search breeds = {breeds}/>
      </div>
    </div>
  );
}

export default Header;

const header = {
  display: "flex",
  flexDirection: "column",
  borderTopLeftRadius: "46px",
  borderTopRightRadius: "46px",
  padding: "54px 204px",
  backgroundImage: `url(${herologo})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const header__title = {
  display: "flex",
  alignItems: "center",
  gap: "27px",
};
const span = {
  fontFamily: "Mystery Quest",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "64px",
  lineHeight: "87px",
  color: "#ffffff",
};

const header__desc = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "29px",
  color: "#ffffff",
  width: "370px",
  marginTop: "11px",
};

const header__search = {
  display: "flex",
  marginTop: "40px",
};
