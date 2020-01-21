const {getPlace, getWeather} = require('./get_data')

const getInfo = async (adress) => {
    try {
        const place = await getPlace(adress);
        const weather = await getWeather(place.adress, place.lat, place.lon)
        return `Weather forecast for ${place.adress}: ${weather.desc}, ${weather.temp}°`
    } catch (e) {
        return `Cannot get weather data for ${place.adress}`
    }
}

module.exports = {
    getInfo
}
