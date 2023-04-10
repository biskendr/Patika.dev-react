import React from 'react'
import styles from './Forecast.module.css'
import { useWeather } from '@/context/WeatherContext';
import Image from 'next/image';
import { getDayOfWeek } from '@/helpers/dateUtils';
import { useTheme } from '@/context/ThemeContext';
import Shimmer from '@/components/Shimmer/Shimmer';

function Forecast() {
  //get  loading, forecast data and current theme from the Contexts
  const { theme } = useTheme()
  const { loading, forecast } = useWeather()

  //if data is loading render shimmer effect
  if (loading) {
    return (
      <div className={styles.main}>
        {Array.from(new Array(5)).map((item, index = 0) => (
          <div key={index} className={styles.forecast}>
            <Shimmer width={170} height={240} />
          </div>))}
      </div >
    )
  }
  return (
    <div className={styles.main}>{
      forecast &&
      forecast.list.map(item =>
        <div key={item.dt} className={`${styles.forecast} ${theme === "dark" ? styles.dark : styles.light}`}>
          <figure className={styles.box}>
            <h2>{getDayOfWeek(item.dt_txt)}</h2>
            <Image
              width={150}
              height={150}
              alt={`${item.weather[0].description}`}
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
            />
          </figure>
          <h3>{item.main.temp.toFixed(0)}°C</h3>
          <p>{item.weather[0].main}</p>
        </div>
      )}
    </div>
  )
}

export default Forecast