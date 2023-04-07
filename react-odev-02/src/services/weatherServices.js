import axios from "axios";

//define environment variables for API
const API_BASE_URL = process.env.WEATHER_APP_BASE_URL;
const API_GEO_URL = process.env.WEATHER_APP_GEO_URL;
const API_KEY = process.env.WEATHER_APP_API_KEY;

//create axios instances for weather and geocoding APIs
export const weatherAPI = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,deflate,compress",
    },
    params: {
        appid: API_KEY,
    },
});
export const geoAPI = axios.create({
    baseURL: API_GEO_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,deflate,compress",
    },
    params: {
        appid: API_KEY,
    },
});

//function get forecast weather by city
export const getCurrentWeatherByCity = async (city) => {
    const response = await weatherAPI.get(`weather`, {
        params: {
            units: "metric",
            q: city,
        },
    });
    return response.data;
}
//function get current weather by city
export const getForecastWeatherByCity = async (city) => {
    const response = await weatherAPI.get(`forecast`, {
        params: {
            units: "metric",
            q: city,
        },
    });
    return response.data;
}
//function get city name from given latitude and longitude
export const getCityByGeoCoords = async (lat, lon) => {
    const response = await geoAPI.get(`reverse`, {
        params: {
            lat,
            lon,
        },
    });
    return response.data;
}
