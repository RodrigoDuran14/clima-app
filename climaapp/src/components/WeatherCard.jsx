import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    <div className='weather-card'>
      <h2>{weather.location.name}, {weather.location.region}</h2>
      <h3>{weather.location.country}</h3>
      <h4>{weather.current.temp_c}°C</h4>
      <div>
        <p>Max: {weather.forecast.forecastday[0].day.maxtemp_c}°C</p>
        <p>Min: {weather.forecast.forecastday[0].day.mintemp_c}°C</p>
      </div>
      <p>Humedad: {weather.current.humidity}%</p>
      <p>Condicion: {weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt="" />
    </div>
  )
}

export default WeatherCard