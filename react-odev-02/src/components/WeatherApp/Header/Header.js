import React from "react";
import cities from "@/json/turkishCities.json";
import { useWeather } from "@/context/WeatherContext";
import styles from './Header.module.css'

function Header() {
  //get current city and setCity function from the WeatherContext
  const { city, setCity } = useWeather();
  return (
    <header className={styles.header}>
      <h3>Select a city</h3>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </header>
  );
}
export default React.memo(Header) 