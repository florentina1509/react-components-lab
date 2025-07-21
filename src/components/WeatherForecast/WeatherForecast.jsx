import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';
import './WeatherForecast.css';

function WeatherForecast({ icon, alt, day, condition, time }) {
  return (
    <div className="weather">
      <WeatherIcon icon={icon} alt={alt} />
      <WeatherData day={day} condition={condition} time={time} />
    </div>
  );
}

export default WeatherForecast;
