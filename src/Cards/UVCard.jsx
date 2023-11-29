// WindInfo.jsx
import React from "react";
import UVIcon from "../Assets/cardIcons/WindIcon";
import "./WindCard.css";
const getUVIndexDescription = (uvIndex) => {
  if (isNaN(uvIndex)) {
    return "N/A";
  }
  if (uvIndex < 3) {
    return "Low protection";
  } else if (uvIndex < 6) {
    return "Moderate protection";
  } else if (uvIndex < 8) {
    return "High protection";
  } else if (uvIndex < 11) {
    return "Very high protection";
  } else {
    return "Extreme protection";
  }
};
const UVCard = ({uvIndex}) => {
  const uvIndexDescription = getUVIndexDescription(uvIndex);

  return (
    <div className='frame-15 bg-opacity-20 border-box bg-gray-300 dark:bg-gray-800 rounded-lg p-6 flex flex-col gap-5 items-start justify-start w-20 h-32 relative overflow-hidden'>
      <div className='title flex flex-row gap-2 items-start justify-start self-stretch'>
        <UVIcon />
        <div className='wind flex-1'>UV</div>
      </div>
      <div className='flex flex-row gap-16 items-start justify-start self-stretch'>
        <div className='flex flex-col gap-8 items-start justify-start flex-1'>
          <div className='text-base-dark text-left font-bold text-4xl relative flex-1'>
            {uvIndex}
          </div>
          {uvIndex ? (
            <div className='text-gray-800 text-left font-bold text-2xl relative self-stretch'>
              {uvIndexDescription}
            </div>
          ) : (
            <div className='text-gray-800 text-left font-bold text-2xl relative self-stretch'>
              N/A
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UVCard;
