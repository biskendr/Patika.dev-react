import { createContext, useContext, useState, useEffect } from "react";
import { fetchCityName, fetchWeatherByCityName, fetchForecastByCityName } from "@/hooks/fetchData";
import { geoCoords } from "@/helpers/getGeoCoords";

//create context with createContext
const WeatherContext = createContext();

//weather provider component for state management
export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState()
    const [current, setCurrent] = useState()
    const [forecast, setForecast] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    //fetch user's geolocation and set city state location
    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const { longitude: lon, latitude: lat } = await geoCoords();
                if (lon && lat) {
                    const result = await fetchCityName(lon, lat);
                    setCity(result);
                }
            } catch (error) {
                setCity("Istanbul");

            }

        })();
    }, []);

    //fetch weather data and update state on the selected city
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                await fetchWeatherByCityName(city).then(data => setCurrent(data));
                await fetchForecastByCityName(city).then(data => setForecast(data));
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (city !== undefined) {
            fetchData();
        }
    }, [city]);

    //state or function to pass as the context value
    const values = {
        city, setCity,
        current, setCurrent,
        forecast, setForecast,
        error, setError,
        loading, setLoading,
    }
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)