export async function getCoordinates(cityPara) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityPara)}`;

    try {
    const response = await fetch(url);
       if (!response.ok) {
            throw new Error('Failed to find city');
        }

    const data = await response.json();
        if (!data.results || data.results.length === 0) {
            throw new Error('City not found');
        }

    const location = data.results[0];

    return {
        name: location.name,
        latitude: location.latitude,
        longitude: location.longitude 
    };
}catch (error) {
     throw error;
}
}


export async function getWeather(latitude, longitude) {
    const url = 
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&forecast_days=5`;

    try{
    const response = await fetch(url);
       if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

    const data = await response.json();

    return data;
    
    }catch (error) {
        throw error;
    }
}
// eport other js functions are allowed to use it
//async this function is doing ssoth that take s time 
//fetch() go to this internet address and ask for the data
//await wait for the data to come back
//json() convert the data into a format that we can use

