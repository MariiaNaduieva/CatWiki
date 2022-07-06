import React from "react";

function DetailOption({ title, desc, range }) {
  return (
    <div style={detailOption}>
      <h3 style={h3}>{title}: </h3>
      <h4 style={h4}>{desc}</h4>
      {range ? (
        <div style={detailOption__range}>
          {[1, 2, 3, 4, 5].map((mp, i) =>
            range >= mp ? (
              <span key={i} style={range__dark}></span>
            ) : (
              <span key={i} style={range__light}></span>
            )
          )}
        </div>
      ) : null}
    </div>
  );
}

export default DetailOption;

const detailOption = {
  display: "flex",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  color: "#000000",
  alignItems: "center",
};
const h3 = {
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "20px",
  width: "148px",
  
};
const h4 = {
  fontSize: "16px",
  lineHeight: "20px",
  marginLeft: "10px",
};
const detailOption__range = {
  display: "flex",
  justifyContent: "right",
  gap: "10px",
  flex: "1",
  alignItems: "center",
};
const range__dark = {
  background: "#544439",
  width: "60px",
  height: "12px",
  borderRadius: "8px",
};
const range__light = {
  background: "#e0e0e0",
  width: "60px",
  height: "12px",
  borderRadius: "8px",
};
