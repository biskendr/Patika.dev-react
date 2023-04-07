import { getCurrentWeatherByCity } from "@/services/weatherServices"

//function handle http requests for current weather data
export default async function handler(req, res) {
    //get query parameter from request object
    const { q } = req.query
    try {
        const currentData = await getCurrentWeatherByCity(q);
        res.status(200).json(currentData)
    } catch (error) {
        const cod = error.response?.data?.cod || "Unknown";
        res.status(cod).json({ error: `${cod} Something went wrong` });
    }
}
