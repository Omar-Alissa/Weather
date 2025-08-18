import React, { useState } from "react";
import { isValidCity } from "../utils/validation";

// Sökformulär för att ange stad och trigga väderhämtning
const SearchForm = ({ onSearch }) => {
  // State för inputfältet
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  // Hanterar formulärets submit och skickar stad till parent
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError("Stad måste anges.");
      return;
    }
    if (!isValidCity(city.trim())) {
      setError("Ogiltig stad.");
      return;
    }
    onSearch(city.trim()); // Anropa callback med stad
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Sök stad..."
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          setError("");
        }}
      />
      <button type="submit">Sök</button>
      {error && <div style={{ color: "red", marginTop: "8px" }}>{error}</div>}
    </form>
  );
};

export default SearchForm;