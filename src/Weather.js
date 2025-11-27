import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';
import SearchBar from './SearchBar';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  // Replace with your actual API key
  const API_KEY = 'dda4786badf9261f94c39d23eb4e2c7c';

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');
    setSearched(true);
    
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (err) {
      setError('City not found. Please try again.');
      setLoading(false);
      setWeatherData(null);
    }
  };

  const handleSearch = (searchCity) => {
    fetchWeather(searchCity);
  };

  if (loading) {
    return (
      <div className="weather-container">
        <div className="weather-card">
          <h1 className="app-title">Weather App</h1>
          <SearchBar onSearch={handleSearch} />
          <div className="loading">Loading weather data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1 className="app-title">Weather App</h1>
        
        <SearchBar onSearch={handleSearch} />
        
        {error && <p className="error-message">{error}</p>}
        
        {!searched && !weatherData && (
          <div className="welcome-message">
                <p className="welcome-text">☀️ Ready to Check the Weather?</p>
                <p className="welcome-subtext">Type a city name above and click search</p>
          </div>
        )}
        
        {weatherData && !error && (
          <div className="weather-info">
            <div className="location">
              <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            </div>
            
            <div className="weather-icon">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
              />
            </div>
            
            <div className="temperature">
              <h1>{Math.round(weatherData.main.temp)}°C</h1>
              <p className="description">{weatherData.weather[0].description}</p>
            </div>
            
            <div className="details">
              <div className="detail-item">
                <p className="detail-label">Feels Like</p>
                <p className="detail-value">{Math.round(weatherData.main.feels_like)}°C</p>
              </div>
              
              <div className="detail-item">
                <p className="detail-label">Humidity</p>
                <p className="detail-value">{weatherData.main.humidity}%</p>
              </div>
              
              <div className="detail-item">
                <p className="detail-label">Wind Speed</p>
                <p className="detail-value">{weatherData.wind.speed} m/s</p>
              </div>
              
              <div className="detail-item">
                <p className="detail-label">Pressure</p>
                <p className="detail-value">{weatherData.main.pressure} hPa</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;