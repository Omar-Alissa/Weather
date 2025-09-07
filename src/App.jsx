import React, { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchForm from "./components/SearchForm";
import { fetchWeather } from "./api";

// App-komponenten hanterar väderdata och sökfunktion
function App() {
  // State för väderdata och felmeddelande
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // Funktion för att hämta väderdata från API
  const loadWeather = async (city) => {
    setError(""); 
    try {
      // Hämta data från API och formatera till WeatherCard-props
      const data = await fetchWeather(city);
      setWeather({
        city: data.name,
        date: new Date().toLocaleDateString(),
        temp: Math.round(data.main.temp),
        desc: data.weather[0].description,
        min: Math.round(data.main.temp_min),
        max: Math.round(data.main.temp_max),
        footer: `Senaste uppdatering: ${new Date().toLocaleTimeString()}`,
      });
    } catch (err) {
      // Visa felmeddelande om API-anrop misslyckas
      setError("Kunde inte hämta väderdata för " + city);
    }
  };

  // Hämta väder för Malmö när sidan laddas första gången
  useEffect(() => {
    loadWeather("Malmö");
  }, []);

  return (
    <div className="app">
      <h1 className="app-title">Weather App</h1>
      {/* Sökformulär för att välja stad */}
      <SearchForm onSearch={loadWeather} />
      {/* Visa felmeddelande om något gick fel */}
      {error && <div className="error-message">{error}</div>}
      {/* Visa väderkort om data finns */}
      {weather && <WeatherCard {...weather} />}
    </div>
  );
}

export default App;