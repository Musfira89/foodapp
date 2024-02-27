import React from "react";
import { IMG_CONFIG_URL } from "../../constant";
import "/index.css";

const RestCards = ({
  cloudinaryImageId,
  name,
  cuisines,
  totalRatingsString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CONFIG_URL + cloudinaryImageId} />
      <h1>{name}</h1>
      {cuisines && <p>{cuisines.join(", ")}</p>}
      <p>{totalRatingsString} stars</p>
    </div>
  );
};

export default RestCards;
