import { useWeather } from '@/context/WeatherContext'
import Image from 'next/image';
import React from 'react'
import styles from './Current.module.css'
import detailStyles from './Details/Details.module.css'
import Details from './Details/Details';
import Shimmer from '@/components/Shimmer/Shimmer';

function Current() {
  //get forecast data and loading state from the WeatherContext  
  const { loading, current } = useWeather()
  const { name, weather, main } = current || {};

  //if data is loading render shimmer effect
  if (loading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <Shimmer width={150} height={40} />
          <figure className={styles.image}>
            <Shimmer width={150} height={150} circle={true} />
          </figure>
          <Shimmer width={80} height={40} />
          <Shimmer width={80} height={10} />
        </div>
        <div className={detailStyles.main}>
          {Array.from(new Array(6)).map((item, index = 0) => (<Shimmer key={index} width={200} height={200} />))}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      {current &&
        <div className={styles.main}>
          <h1> {name.split(' ')[0]}</h1>
          <figure className={styles.image}>
            <Image
              width={150}
              height={150}
              alt={`${weather[0].description}`}
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
              priority
            />
          </figure>
          <h1> {main.temp.toFixed(0)}°C</h1>
          <h3>{weather[0].main}</h3>
        </div>
      }
      <Details />
    </div>
  )
}

export default Current