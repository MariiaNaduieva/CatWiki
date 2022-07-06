import React from "react";
import DetailOption from "./DetailOption";

function CatDetails({
  imageUrl,
  name,
  description,
  temperament,
  origin,
  life_span,
  adaptability,
  affection_level,
  child_friendly,
  grooming,
  intelligence,
  health_issues,
  social_needs,
  stranger_friendly,
}) {
  return (
    <div style={catDetails}>
      <div style={{ ...img, backgroundImage: `url(${imageUrl})` }} />
      <div style={catDetail}>
        <h1 style={h1}>{name}</h1>
        <h3 style={h3}>{description}</h3>
        <DetailOption title={"Temperament"} desc={temperament} />
        <DetailOption title={"Origin"} desc={origin} />
        <DetailOption title={"Life-span"} desc={life_span} />
        <DetailOption title={"Adaptability"} range={adaptability} />
        <DetailOption title={"Affection level"} range={affection_level} />
        <DetailOption title={"Child Friendly"} range={child_friendly} />
        <DetailOption title={"Grooming"} range={grooming} />
        <DetailOption title={"Intelligence"} range={intelligence} />
        <DetailOption title={"Health issues"} range={health_issues} />
        <DetailOption title={"Social needs"} range={social_needs} />
        <DetailOption title={"Stranger friendly"} range={stranger_friendly} />
      </div>
    </div>
  );
}

export default CatDetails;

const catDetails = {
  display: "flex",
  gap: "59px",
};
const img = {
  width: "371.04px",
  height: "371.04px",
  borderRadius: "24px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  flex: 1,
};
const catDetail = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: 2,
  //gap: "25px",
};
const h1 = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "36px",
  lineHeight: "44px",
  color: "#291507",
};
const h3 = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "22px",
  color: "#291507",
};
