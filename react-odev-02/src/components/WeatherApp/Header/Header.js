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
        <option value={city} disabled selected hidden>{city}</option>
        {cities.map((cityy, index) => (
          <option key={index} value={cityy.name}>
            {cityy.name}
          </option>
        ))}
      </select>
    </header>
  );
}
export default React.memo(Header) 