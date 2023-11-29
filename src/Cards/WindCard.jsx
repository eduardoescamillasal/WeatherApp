// WindInfo.jsx
import React from "react";
import WindIcon from "../Assets/cardIcons/WindIcon";
import "./WindCard.css"
const WindCard = ({speed, direction, gust}) => {
  return (
    <div className='frame-15 bg-opacity-20 border-box bg-gray-300 dark:bg-gray-800 rounded-lg p-6 flex flex-col gap-5 items-start justify-start w-20 h-32 relative overflow-hidden'>
      <div className='title flex flex-row gap-2 items-start justify-start self-stretch'>
        <WindIcon />
        <div className='wind flex-1'>Wind</div>
      </div>
      <div className='flex flex-row gap-16 items-start justify-start self-stretch'>
        <div className='flex flex-col gap-8 items-start justify-start flex-1'>
          <div className='text-gray-800 text-left font-bold text-2xl relative self-stretch'>
            Speed
          </div>
          <div className='text-base-dark text-left font-bold text-4xl relative flex-1'>
            {speed} km/h
          </div>
        </div>
        <div className='flex flex-col gap-8 items-start justify-start flex-1'>
          <div className='text-gray-800 text-left font-bold text-2xl relative self-stretch'>
            Direction
          </div>
          <div className='text-base-dark text-left font-bold text-4xl relative flex-1'>
            {direction}°
          </div>
        </div>
        <div className='flex flex-col gap-8 items-start justify-start flex-1'>
          <div className='text-gray-800 text-left font-bold text-2xl relative self-stretch'>
            Gust
          </div>
          <div className='text-base-dark text-left font-bold text-4xl relative flex-1'>
            {gust} km/h
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindCard;
