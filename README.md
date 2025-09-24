# Weather App

Det här projektet är en enkel och snygg väderapplikation byggd med React.  
Du kan söka efter vädret i olika städer och få aktuell temperatur, väderbeskrivning samt min/max-värden.  
När sidan laddas visas automatiskt vädret för Malmö.

## Funktioner

- Sök efter väder i valfri stad (endast bokstäver tillåtna)
- Responsiv design – fungerar bra på mobil, surfplatta och dator
- Felhantering om staden inte hittas eller API-anrop misslyckas
- API-nyckel hanteras säkert via `.env`-fil
- **För läraren:** API-nyckeln : VITE_WEATHER_API_KEY=464beed25ba4e16d3e4e431c9aa8a20b

## Kom igång

1. Klona repot:
   ```
   git clone https://github.com/<ditt-användarnamn>/weather-card.git
   cd weather-card
   ```

2. Installera beroenden:
   ```
   npm install
   ```

3. Skapa en `.env`-fil i projektroten och lägg till din API-nyckel:
   ```
   VITE_WEATHER_API_KEY= din api nyckel
   ```

4. Starta utvecklingsservern:
   ```
   npm run dev
   ```

## Struktur

- `src/components/` – alla React-komponenter
- `src/api.js` – funktion för att hämta väderdata
- `src/utils/validation.js` – valideringsfunktioner för input
- `src/App.jsx` – huvudkomponenten

## Testning med Vitest

Projektet använder [Vitest](https://vitest.dev/) för att testa React-komponenter och funktioner.

### Installera testberoenden
Testpaket är redan inkluderade i projektet. Om du behöver installera om:
```
npm install --save-dev vitest @testing-library/react
```

### Köra tester
Kör alla tester med:
```
npx vitest
```
eller
```
npm test
```

### Teststruktur
- Testfiler ligger i `src/` och slutar på `.test.jsx`.
- Exempel: `src/App.test.jsx` och `src/Dummy.test.jsx`.
- Testerna kontrollerar rendering, input och API-anrop.

## API

Väderdata hämtas från [OpenWeatherMap](https://openweathermap.org/).  
Du behöver en egen API-nyckel.

---

Jag har byggt detta för att öva på React, API-integration och responsiv design.
