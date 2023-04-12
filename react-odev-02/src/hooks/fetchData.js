import axios from 'axios'

//fetch city name by longitude and latitude coordinates
export async function fetchCityName(lon, lat) {
    return await axios.get(`/api/geo?lat=${lat}&lon=${lon}`).then(res => res.data[0].name);
}
//fetch the current weather for city
export async function fetchWeatherByCityName(city) {
    return await axios.get(`/api/current?q=${city}`).then(res => res.data);
}
//fetch the forecast weather for city
//filter only forecast for 12:00 pm on future days, excluding today
export async function fetchForecastByCityName(city) {
    const data = await axios.get(`/api/forecast?q=${city}`).then(res => res.data);
    const filteredList = data.list.filter(item => {
        return item.dt_txt.includes('12:00:00') && new Date(item.dt_txt).getDate() !== new Date().getDate();
    });
    return {
        ...data,
        list: filteredList
    };
}
