import React, { useState, useEffect } from "react";
import getOtherPhotos from "../api/getOtherPhotos";

function OtherPictures({ id }) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    async function getPictures() {
      const photos = await getOtherPhotos(id);
      setPictures(photos);
    }
    getPictures();
  }, [id]);
  return (
    <div style={otherPictures}>
      <div style={h6}>Other photos</div>
      <div style={pictures_style}>
        {pictures.length > 0 &&
          pictures.map((picture, i) => (
            <div
              key={i}
              style={{
                ...img,
                backgroundImage: `url(${picture.url})`,
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default OtherPictures;

const otherPictures = {
  display: "flex",
  flexDirection: "column",
  marginTop: "80px",
  gap: "40px",
};
const h6 = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "36px",
  lineHeight: "44px",
};
const pictures_style = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(2, 278px)",
  gap: "46px",
  marginBottom: "36px",
};
const img = {
  width: "100%",
  height: "278px",
  borderRadius: "24px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
