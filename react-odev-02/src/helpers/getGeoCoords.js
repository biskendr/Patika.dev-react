//this function gets with the user's geolocation coordinates.
export const geoCoords = () => {
    return new Promise((resolve, reject) => {
        //if browser supports geolocation, call getCurrentPosition on navigator.geolocation.
        if (window.navigator.permissions) {
            //query for geolocation permission
            window.navigator.permissions.query({ name: 'geolocation' }).then((permission) => {
                //if permission is granted, get the current position
                if (permission.state === 'granted') {
                    window.navigator.geolocation.getCurrentPosition(
                        ({ coords }) => {
                            resolve(coords);
                        },
                        //if there is an error, return default coordinates
                        (err) => {
                            resolve({ latitude: 41.0091982, longitude: 28.9662187 })
                        }
                    );
                    //if permission is prompt, ask for permission and get current position
                } else if (permission.state === 'prompt') {
                    window.navigator.geolocation.getCurrentPosition(
                        ({ coords }) => {
                            resolve(coords);
                        },
                        //if there is an error, return default coordinates
                        (err) => {
                            resolve({ latitude: 41.0091982, longitude: 28.9662187 })
                        }
                    );
                    //if permission is denied, return default coordinates
                } else if (permission.state === 'denied') {
                    resolve({ latitude: 41.0091982, longitude: 28.9662187 })
                }
            });
            //if permission is not available, try to get current position
        } else if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve(coords);
                },
                //if there is an error, return default coordinates
                (err) => {
                    resolve({ latitude: 41.0091982, longitude: 28.9662187 })
                }
            );
            //if geolocation is not supported, log an error message
        } else {
            console.log('Geo Location not supported');
        }
    });
};
