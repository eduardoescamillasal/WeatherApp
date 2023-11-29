import React from "react";

const WeatherCard = ({title, icon, description, data}) => {
  return (
    <div className='m-3  border border-gray-400 rounded-lg p-4 hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 bg-gray-500/60'>
      <h2 className='text-lg mb-2'>
        {title}
        <span className='text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse'>
          Tag
        </span>
      </h2>
      <p className='font-light font-mono text-sm text-black-700 hover:text-gray-900 transition-all duration-200'>
        {description}
      </p>
      <p className='font-light font-mono text-sm text-black-700 hover:text-gray-900 transition-all duration-200'>
        {data}
      </p>
    </div>
  );
};

export default WeatherCard;
