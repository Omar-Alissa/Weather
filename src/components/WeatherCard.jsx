// WeatherCard.jsx
// Presentationskomponent för väderkortet
import React from "react";
import "../App.css";

const WeatherCard = ({ city, date, temp, desc, min, max, footer }) => (
  <div className="weather-card">
    {/* Header: Stad och datum */}
    <div className="weather-header">
      <span className="weather-city">{city}</span>
      <span className="weather-date">{date}</span>
    </div>
    <hr className="weather-divider" />
    {/* Huvudinfo: ikon, temperatur, beskrivning */}
    <div className="weather-main">
      <div className="weather-icon">
        {/* Molnikon, byt ut mot SVG eller API-data senare */}
        <span role="img" aria-label="cloud" style={{ fontSize: "64px" }}>☁️</span>
      </div>
      <div className="weather-temp">
        <span className="weather-temp-value">{temp}</span>
        <span className="weather-temp-unit">°</span>
      </div>
      <div className="weather-desc">{desc}</div>
    </div>
    {/* Extra info: min/max temperatur */}
    <div className="weather-extra">
      <div className="weather-info-box">Min<br />{min}°</div>
      <div className="weather-info-box">Max<br />{max}°</div>
    </div>
    {/* Reservfält, kan användas för status eller meddelande */}
    <div className="weather-footer">{footer}</div>
  </div>
);

export default WeatherCard;
