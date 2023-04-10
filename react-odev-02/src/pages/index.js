import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useTheme } from '@/context/ThemeContext';
import { useWeather } from '@/context/WeatherContext';
import WeatherApp from '@/components/WeatherApp';
import Custom404 from '@/pages/404'

function Home() {
  //get  error status and current theme from the Contexts
  const { theme } = useTheme()  
  const { error } = useWeather()

  // if error, render the custom 404 page
  if (error) {
    return <Custom404 />
  }
  return (
    <>
      <Head>
        <title>React Weather App</title>
        <meta name="description" content="React Weather App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/react.svg" />
      </Head>
      <div className={`${styles.theme} ${theme === "dark" ? styles.dark : styles.light}`}>
        <main className={styles.main}>
          <WeatherApp />
        </main>
      </div>
    </>
  )
}

export default Home