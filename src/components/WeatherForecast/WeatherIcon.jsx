import React from 'react';

function WeatherIcon({ icon, alt }) {
  return <img src={icon} alt={alt} style={{ width: '50px' }} />;
}

export default WeatherIcon;
