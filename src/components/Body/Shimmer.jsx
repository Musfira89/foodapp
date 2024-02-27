import React from "react";
import { shimmer_units } from "../../constant";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(shimmer_units).fill(0).map((index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;
