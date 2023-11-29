import React, {useState, useEffect} from "react";
import axios from "axios";
import "./SideBar.css";

import ClearSky from "./Assets/icons/ClearSky";
import ScatteredClouds from "./Assets/icons/ScatteredClouds";
import BrokenClouds from "./Assets/icons/BrokenClouds";
import ThunderStorm from "./Assets/icons/ThunderStorm";

const SideBar = ({cities, onCitySelect}) => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  //const cities = ["Monterrey", "Veracruz", "Colima", "Houston", "Mexico City"];
  const apiKey = "cd456fed63d08b5b6ba35056d67faa4e";

  useEffect(() => {
    const fetchWeatherData = async (city) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeatherData((prevData) => [...prevData, response?.data]);
        setError(null);
      } catch (err) {
        setWeatherData([]);
        setError("City not found");
      }
    };

    // Fetch weather data for all cities when the component mounts
    cities.forEach((city) => {
      fetchWeatherData(city);
    });
  }, [cities]); 
  return (
    <div className='side-bar bg-opacity-60 border-l border-gray-300 p-8 flex flex-col gap-8 items-start justify-start w-20 h-96 relative shadow-lg overflow-hidden'>
      <div className='locations text-base-dark text-left font-bold text-4xl relative self-stretch'>
        Locations
      </div>
      <div className='frame-19 flex flex-col gap-20 items-start justify-start self-stretch'>
        {weatherData.map((data, index) => (
          <div
            key={index}
            className='weather-card bg-opacity-50 rounded-md p-4 flex flex-row gap-4 items-center justify-start self-stretch'
            onClick={() => onCitySelect(data.name)} 
          >
            <div className='col flex flex-col gap-2 items-start justify-start flex-1 relative'>
              <div className='monterrey text-base-dark text-left font-bold text-2xl relative self-stretch'>
                {data?.name}
              </div>
              <div className='sunny text-base-dark text-left font-normal text-base relative self-stretch'>
                {data.weather[0]?.description}
              </div>
            </div>

            {data.weather[0].main}
            {data.weather[0].main === "thunderstorm" && <ThunderStorm />}
            {data.weather[0].description === "overcast clouds" && <ScatteredClouds />}
            {data.weather[0].description === "clear sky" && <ClearSky />}
            {data.weather[0].description === "broken clouds" && <BrokenClouds />}

            <div className='row flex flex-row gap-2 items-center justify-start flex-shrink-0 w-32 min-w-28 max-w-36 relative'>
              <div className='text-base-dark text-left font-bold text-4xl relative flex-1'>
                {Math.round(data.main.temp - 273)}°
              </div>
              <div className='flex flex-col gap-2 items-start justify-start flex-shrink-0 relative'>
                <div className='text-blue-800 text-left font-light text-sm relative'>
                  H: {Math.round(data.main.temp_max - 273)}°
                </div>
                <div className='text-gray-800 text-left font-light text-sm relative'>
                  L: {Math.round(data.main.temp_min - 273)}°
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
