import { useWeather } from '@/context/WeatherContext';
import { convertUnixTimetoString } from '@/helpers/dateUtils';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import styles from './Details.module.css';

function Details() {
  //get current data and current theme from the Contexts  
  const { theme } = useTheme();
  const { current } = useWeather();

  //define array data the weather cards to display
  const detailCards = [
    {
      title: 'Feels like',
      icon: 'https://img.icons8.com/ios/256/thermometer.png',
      value: `${current?.main.feels_like?.toFixed(0)}°C`,
    },
    {
      title: 'Humidity',
      icon: 'https://img.icons8.com/ios/256/hygrometer.png',
      value: `${current?.main.humidity}%`,
    },
    {
      title: 'Wind',
      icon: 'https://img.icons8.com/ios/256/wind--v1.png',
      value: `${current?.wind.speed}km/h`,
    },
    {
      title: 'Sunrise',
      icon: 'https://img.icons8.com/ios/256/sunrise--v1.png',
      value: convertUnixTimetoString(current?.sys.sunrise),
    },
    {
      title: 'Sunset',
      icon: 'https://img.icons8.com/ios/256/sunset--v1.png',
      value: convertUnixTimetoString(current?.sys.sunset),
    },
    {
      title: 'Pressure',
      icon: 'https://img.icons8.com/ios/256/barometer-gauge.png',
      value: `${current?.main.pressure}hPa`,
    },
  ];

  return (
    <div className={`${styles.main} ${theme === 'dark' ? styles.dark : styles.light}`}>
      {current && (
        <>
          {detailCards.map(({ title, icon, value }) => (
            <div className={styles.card} key={title}>
              <h3>{title}</h3>
              <Image src={icon} alt={title} width={50} height={50} />
              <p>{value}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Details;
