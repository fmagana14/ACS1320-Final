import "./App.css";
import { useState } from "react";

const api = {
  key: "9b496d216be38721e1b8d845cd464d84",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>
        {/* Search Box - Input + Button  */}
      <div id="weather-container">
            <input
              type="text"
              placeholder="Enter city/town..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>Search</button>
        

            <div>
              {/* Location  */}
              <p>{weather.name}</p>

              {/* Temperature Celsius  */}
              <p>{weather.main.temp}°F</p>

              {/* Condition (Sunny ) */}
              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
            </div>
          </div>
        
        
      </header>
    </div>
  );
}

export default App;
