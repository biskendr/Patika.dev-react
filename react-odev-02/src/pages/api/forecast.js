import { getForecastWeatherByCity } from "@/services/weatherServices"

//function handle http requests for forecast weather data
export default async function handler(req, res) {
    //get query parameter from request object
    const { q } = req.query;
    try {
        const currentData = await getForecastWeatherByCity(q);
        res.status(200).json(currentData);
    } catch (error) {
        const cod = error.response?.data?.cod || "Unknown";        
        res.status(cod).json({ error: `${cod} Something went wrong` });
    }
}
