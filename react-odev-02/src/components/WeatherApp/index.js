import React from 'react'
import Header from './Header/Header'
import Current from './Current/Current'
import Forecast from './Forecast/Forecast'
import styles from './index.module.css'
import { useTheme } from '@/context/ThemeContext'

function WeatherApp() {
  //get current theme from the ThemeContext
  const { theme } = useTheme()
  
  return (
    <>
      <Header />
      <div className={`${styles.wrapper} ${theme === "dark" ? styles.dark : styles.light}`}>
        <Current />
        <Forecast />
      </div>
    </>
  )
}

export default WeatherApp