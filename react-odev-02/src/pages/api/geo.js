import { getGeoCoords } from "@/services/weatherServices"

//function handle http requests for location data
export default async function handler(req, res) {
    //get query parameter from request object
    const { lat, lon } = req.query
    try {
        const currentData = await getGeoCoords(lat, lon);
        res.status(200).json(currentData)
    } catch (error) {
        const cod = error.response?.data?.cod || "Unknown";
        res.status(cod).json({ error: `${cod} Something went wrong` });
    }
}
