const axios = require('axios');

getPlace = async(direccion) => {

    let encodedURI = encodeURI(direccion);

    let instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURI}`,
        headers: {"x-rapidapi-key": "4931bb92c5msh2a32adb4f31d389p15aa73jsn44d30bfdb477"}
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontraron resultados para ${direccion}`)
    }

    const data = resp.data.Results[0]

    return {
        adress: data.name,
        type: data.type,
        lat: data.lat,
        lon: data.lon
    }
};

getWeather = async (place, latitude, longitude) => {
    const api_key = "9087c683711e884758561ba07983c142"

    let call = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`
    })

    let resp = await call.get();

    return {
        desc: resp.data.weather[0].description,
        temp: resp.data.main.temp
    }
}

module.exports = {
    getPlace,
    getWeather
}