import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BreedsContext } from "../context";

import CatDetails from "../components/CatDetails";
import OtherPictures from "../components/OtherPictures";

function BreedDetail() {
  const { breedName } = useParams();
  const { breeds } = useContext(BreedsContext);
  const breed = breeds.find((x) => x.id === breedName);

  return (
    <div style={breed_style}>
      <CatDetails
        imageUrl={breed?.image.url}
        name={breed?.name}
        description={breed?.description}
        temperament={breed.temperament}
        origin={breed?.origin}
        life_span={breed?.life_span}
        adaptability={breed?.adaptability}
        affection_level={breed?.affection_level}
        child_friendly={breed?.child_friendly}
        grooming={breed?.grooming}
        intelligence={breed?.intelligence}
        health_issues={breed?.health_issues}
        social_needs={breed?.social_needs}
        stranger_friendly={breed?.stranger_friendly}
      />
      <OtherPictures id={breed?.id} />
    </div>
  );
}

export default BreedDetail;

const breed_style = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};
