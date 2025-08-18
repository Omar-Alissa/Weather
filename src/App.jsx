
import WeatherCard from "./WeatherCard";
import "./App.css";

// App-komponent: wrapper för bakgrund och väderkort
function App() {
  return (
    <div className="weather-bg">
      {/* Väderkortet som egen komponent */}
      <WeatherCard
        city="Malmö"
        date="29 maj 2023"
        temp={38}
        desc="molnigt"
        min={38}
        max={38}
        footer="Reserv"
      />
    </div>
  );
}

export default App;
