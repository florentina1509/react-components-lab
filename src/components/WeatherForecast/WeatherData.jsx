import React from 'react';

function WeatherData({ day, condition, time }) {
  return (
    <div>
      <h3>{day}</h3>
      <p>{condition}</p>
      <span>{time}</span>
    </div>
  );
}

export default WeatherData;
