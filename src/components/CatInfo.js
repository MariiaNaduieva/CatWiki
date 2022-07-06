import React from "react";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import { CgArrowLongRight } from "react-icons/cg";

function CatInfo() {
  return (
    <div style={catInfo}>
      <div styke={catInfo__left}>
        <div style={catInfo__line}></div>
        <h2 style={h2}>Why should you have a cat?</h2>
        <h3 style={h3}>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </h3>
        <div style={catInfo__showmore}>
          <span style={span}>READ MORE</span>
          <CgArrowLongRight />
        </div>
      </div>
      <div style={catInfo__right}>
        <img src={image2} alt="" style={{ width: "273.52px" }} />
        <img src={image3} alt="" style={{ width: "238.47px" }} />
        <img
          src={image1}
          alt=""
          style={{ width: "195.49px", marginLeft: "auto" }}
        />
      </div>
    </div>
  );
}

export default CatInfo;

const catInfo = {
  display: "flex",
  gap: "20px",
  padding: "100px 104px",
};
const catInfo__left = {
  padding: "76px",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Montserrat",
  fontStyle: "normal",
};
const catInfo__line = {
  width: "59.18px",
  height: "3.21px",
  background: "#4d270c",
  borderRadius: "77px",
};
const h2 = {
  fontWeight: "bold",
  fontSize: "48px",
  lineHeight: "59px",
  color: "#291507",
  width: "447.74px",
};
const h3 = {
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "22px",
  color: "#291507",
  width: "447.74px",
  marginTop: "43px",
};
const catInfo__showmore = {
  display: "flex",
  marginTop: "auto",
  alignItems: "center",
  gap: "5px",
  color: "rgba(41, 21, 7, 0.6)",
  marginTop: "40px",
};
const span = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "18px",
  lineHeight: "22px",
  textAlign: "right",
};

const catInfo__right = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(3, 11vw)",
  gap: "25px",
};
