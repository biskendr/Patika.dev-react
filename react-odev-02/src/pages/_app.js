import { ThemeProvider } from '@/context/ThemeContext'
import { WeatherProvider } from '@/context/WeatherContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  //wrap app with the ThemeProvider and WeatherProvider
  return <ThemeProvider>
    <WeatherProvider>
      <Component {...pageProps} />
    </WeatherProvider>
  </ThemeProvider>
}
