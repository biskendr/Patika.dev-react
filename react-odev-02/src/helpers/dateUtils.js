//function get abbreviated current day of the week for the given date.
export const getDayOfWeek = (dateNow) => {
    const days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];
    const today = new Date(dateNow);
    let day = days[today.getDay()];
    return `${day}`;
};

//function takes a unix timestamp and returns hour and minute in string
export const convertUnixTimetoString = (timestamp) => {
    const [hour, minute] = new Date(timestamp * 1000)
        .toLocaleTimeString()
        .split(':')
        .slice(0, 2)
        .map(Number);
    return `${hour}:${minute}`;
};


