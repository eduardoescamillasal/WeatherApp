import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherRain from "../src/Assets/Weather=rain.png";
import WeatherThunderstorm from "../src/Assets/Weather=thunderstorm.png";
import WeatherClearSky from "../src/Assets/Weather=clear_sky.png";
import WeatherBrokenClouds from "../src/Assets/Weather=broken_clouds.png";
import WeatherFewClouds from "../src/Assets/Weather=few_clouds.png";
import WeatherShowerRain from "../src/Assets/Weather=shower_rain.png";
import WindCard from "./../src/Cards/WindCard";
import SideBar from "./SideBar";
import HumidityCard from "./Cards/HumidityCard";
import PrecipitationCard from "./Cards/PrecipitationCard";
import CloudlinessCard from "./Cards/CloudlinessCard";
import UVCard from "./Cards/UVCard";
import MainWeatherCard from "./Cards/MainWeatherCard";
import ForecastCard from "./Cards/ForecastCard";
import VisibilityCard from "./Cards/VisibilityCard";
import PressureCard from "./Cards/PressureCard";
const Weather = () => {
  const [city, setCity] = useState("Monterrey");

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Monterrey");
  const apiKey = "cd456fed63d08b5b6ba35056d67faa4e";
  const handleCitySelect = async (selectedCity) => {
    setCity(selectedCity);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}`
      );
      setWeatherData(response.data);
      setError(null);
      setSelectedCity(selectedCity);

    } catch (err) {
      setWeatherData(null);
      setError("City not found");
    }
  };



  const getBackgroundImage = (condition) => {
    switch (condition) {
      case "thunderstorms":
        return WeatherThunderstorm;
      case "broken_clouds":
        return WeatherBrokenClouds;
      case "clear_sky":
        return WeatherClearSky;
      case "few_clouds":
        return WeatherFewClouds;
      case "rain":
        return WeatherRain;
      case "light rain":
        return WeatherShowerRain;
      default:
        return WeatherFewClouds;
    }
  };

  return (
    <>
      <div
        className='relative bg-cover bg-center'
        style={{
          backgroundImage: `url(${
            weatherData && weatherData.weather && weatherData.weather[0]
              ? getBackgroundImage(weatherData.weather[0].description)
              : WeatherFewClouds
          })`,
          backgroundSize: "cover",
          height: "100vh",
        }}>
        {console.log("Rendering background image", JSON.stringify(weatherData))}
        <div className='absolute inset-0 bg-gray-500 bg-opacity-50'></div>
        <div className='container mx-auto mt-8 p-4 flex flex-col'>
          <div className='grid grid-flow-col grid-rows-4 grid-cols-3 gap-8'>
            {weatherData && (
              <>
                <div className='col-span-3 bg-white-500 bg-opacity-75 p-4 rounded'>
                  <MainWeatherCard
                    icon={weatherData.weather[0].main}
                    city={selectedCity}
                    maxTemperature={parseInt(weatherData?.main?.temp_max - 273)}
                    minTemperature={parseInt(weatherData?.main?.temp_min - 273)}
                    feelsLike={parseInt(weatherData?.main?.feels_like - 273)}
                  />
                </div>
              </>
            )}

            <div className='col-span-2 bg-white-500 bg-opacity-75 p-4 rounded'>
              <WindCard
                speed={weatherData?.wind?.speed}
                direction={weatherData?.wind?.deg}
                gust={weatherData?.wind?.gust}
              />
            </div>
            <div className='col-span-1 bg-white-500 bg-opacity-75 p-4 rounded'>
              <HumidityCard humidity={weatherData?.main?.humidity} />
            </div>
            <div className='bg-white-500 bg-opacity-75 p-4 rounded'>
              <PrecipitationCard
                oneHour={weatherData?.rain?.["1h"] || 0}
                threeHours={weatherData?.rain?.["3h"] || 0}
              />
            </div>
            <div className='bg-white-500 bg-opacity-75 p-4 rounded'>
              <CloudlinessCard cloudliness={weatherData?.clouds?.all || 0} />
            </div>
            <div className='bg-white-500 bg-opacity-75 p-4 rounded'>
              <UVCard uvIndex={weatherData?.current?.uvi} />
            </div>
            <div className='bg-white-500 bg-opacity-75 p-4 rounded'>
              <ForecastCard />
            </div>
            <div className='bg-white-500 bg-opacity-75 p-4 rounded'>
              <VisibilityCard visibility={weatherData?.visibility / 1000} />
            </div>
            <div className='bg-white-500 bg-opacity-75 p-4 rounded'>
              <PressureCard pressure={weatherData?.main?.pressure} />
            </div>
          </div>
          {error && <p className='text-red-500 mt-2'>{error}</p>}

          <div className='absolute top-0 right-0 p-4'>
            <SideBar
              cities={["Monterrey", "Veracruz", "Colima", "Houston", "Mexico City"]}
              onCitySelect={handleCitySelect}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
