import React, { useState } from "react";

// Sökformulär för att ange stad och trigga väderhämtning
const SearchForm = ({ onSearch }) => {
  // State för inputfältet
  const [city, setCity] = useState("");

  // Hanterar formulärets submit och skickar stad till parent
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim()); // Anropa callback med stad
      setCity(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      {/* Inputfält för stad */}
      <input
        type="text"
        placeholder="Sök stad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {/* Sökknapp */}
      <button type="submit">Sök</button>
    </form>
  );
};

export default SearchForm;