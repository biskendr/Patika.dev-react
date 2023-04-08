import { getCityByGeoCoords } from "@/services/weatherServices"

//function handle http requests for location data
export default async function handler(req, res) {
    //get query parameter from request object
    const { lat, lon } = req.query
    try {
        const currentData = await getCityByGeoCoords(lat, lon);
        res.status(200).json(currentData)
    } catch (error) {
        res.status(500).json({ error: ' Something went wrong' });
    }
}
