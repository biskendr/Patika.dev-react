import { getCurrentWeatherByCity } from "@/services/weatherServices"

//function handle http requests for current weather data
export default async function handler(req, res) {
    //get query parameter from request object
    const { q } = req.query
    try {
        const currentData = await getCurrentWeatherByCity(q);
        res.status(200).json(currentData)
    } catch (error) {
        res.status(500).json({ error: ' Something went wrong' });
    }
}
