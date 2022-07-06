import React from "react";
import logo from "../images/CatwikiLogo.svg";

function Footer() {
  return (
    <div style={footer}>
      <img src={logo} alt="CatWiki" style={{filter:"brightness(0) invert(1)"}} />
      <div style={h2}>Created by Mariia Naduieva</div>
    </div>
  );
}

export default Footer;

const footer = {
  justifyContent: "space-between",
  padding: "32px 40px",
  backgroundColor: "black",
  borderTopLeftRadius: 42,
  borderTopRightRadius: 42,
  margin: "0px 96px 0px 96px",
  flexDirection: "row",
  display: "flex",
  alignItems: "center",

  
};
const h2 = {
  fontFamily: "Montserrat",
  textAligh: "right",
  fontSize: "18px",
  lineHeight: "15px",
  fontWeight: '400',
  color:"white",
};
