import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchHistory from "./components/SearchHistory";
import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  const API_KEY = "95a368d8cdc34496af0221113241006";

  const getWeather = async (city) => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}%20&lang=es&q=${city}`
      );
      setWeather(response.data);

      console.log(city);

      await axios.post("http://localhost:3001/api/search", {
        city: response.data.location.name,
      });
      fetchSearchHistory();
    } catch (error) {
      console.log("Error al traer los datos del clima", error);
    }
  };

  const fetchSearchHistory = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/search");
      setHistory(response.data);
    } catch (error) {
      console.log("Error al traer el historial de busqueda", error);
    }
  };

  useEffect(() => {
    fetchSearchHistory();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>App del clima</h1>
        <SearchBar onSearch={getWeather} />
        <div className="cont2">
          <div>
            <WeatherDisplay weather={weather} />
          </div>
          <div>
            <SearchHistory history={history} onCityClick={getWeather} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
