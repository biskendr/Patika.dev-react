//this function gets with the user's geolocation coordinates.
export const geoCoords = () => {
    return new Promise((resolve, reject) => {
        //if browser supports geolocation, call getCurrentPosition on navigator.geolocation.
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve(coords);
                },
                (err) => {
                    reject(err);
                }
            );
        } else {
            console.log("Geo Location not supported");
        }
    });
}