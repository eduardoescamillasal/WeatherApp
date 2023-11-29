// WeatherCard.jsx
import React from "react";
import ThunderStorm from "../Assets/icons/ThunderStorm";
import ScatteredClouds from "../Assets/icons/ScatteredClouds";
import ClearSky from "../Assets/icons/ClearSky";
const MainWeatherCard = ({
  city,
  currentTemperature="10",
  maxTemperature=23,
  minTemperature=23,
  feelsLike = 23,
  icon
}) => {
  return (
    <div className='weather-card-main flex gap-32 items-center justify-start  relative'>
      <div className='frame-20 flex flex-col gap-8 items-center justify-start flex-shrink-0 relative'>
        {icon === "Thunderstorm" && <ThunderStorm />}
        {icon === "Clouds" && <ScatteredClouds />}
        {icon === "Clear" && <ClearSky />}
        <div className='sunny-main text-center text-base-dark font-bold text-2xl relative align-self-stretch '>
          {icon}
        </div>
      </div>
      <div className='col flex flex-col gap-16 items-start justify-start flex-1 relative'>
        <div className='monterrey-main text-left text-base-dark font-bold text-6xl relative align-self-stretch'>
          {city}
        </div>
        <div className='row flex flex-row gap-24 items-center justify-start flex-shrink-0 relative'>
          <div className='_12-main text-left text-base-dark font-bold text-6xl relative'>
            {currentTemperature}°
          </div>
          <div className='col2-main flex flex-col gap-16 items-start justify-center flex-shrink-0 relative'>
            <div className='max-min flex flex-row gap-16 items-start justify-flex-start flex-shrink-0 relative'>
              <div className='h-18-main text-left text-base-dark font-bold text-1xl relative'>
                H: {maxTemperature}°
              </div>
              <div className='l-7-main text-left text-base-dark font-bold text-1xl relative'>
                L: {minTemperature}°
              </div>
            </div>
            <div className='feels-like flex flex-row gap-8 items-start justify-flex-start flex-shrink-0 relative'>
              <div className='feels-like2 text-left text-base-dark font-bold text-xl relative'>
                Feels like:
              </div>
              <div className='_10 text-left text-base-dark font-bold text-xl relative'>
                {feelsLike}°
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWeatherCard;
