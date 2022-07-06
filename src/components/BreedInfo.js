import React from "react";

function BreedInfo({ photoUrl, title }) {
  return (
    <div style={breedInfo}>
      <div style={{ ...breed_img, backgroundImage: `url(${photoUrl})` }}></div>
      <h3 style={h3}>{title}</h3>
    </div>
  );
}

export default BreedInfo;

const breed_img = {
  width: "220px",
  height: "220px",
  borderRadius: 24,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const h3 = {
  fontSize: "14px",
  lineHeight: "18px",
  color: "#291507",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "22px",
  margin: 0,
  
};

const breedInfo = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};
