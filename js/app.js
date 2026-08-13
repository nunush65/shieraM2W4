// User clicks Search
//        ↓
// Get city from input
//        ↓
// getCoordinates(city)
//        ↓
// getWeather(latitude, longitude)
//        ↓
// showWeather(data)

import { getCoordinates,
         getWeather }
from './api.js';
import { showWeather,
         showLoading,
         showError,
         showIdle } 
from './render.js';

// getCoordinates → comes from api.js
// getWeather → comes from api.js
// showWeather → comes from render.js

const input = document.getElementById('city-input');
const formp = document.getElementById('searchForm');

showIdle();

formp.addEventListener('submit', async (event) => {

    event.preventDefault();

    const city = input.value.trim();

    if (!city) {
        showError("please enter a city name");
        return;
    }

    showLoading();
        try {
            const location = await getCoordinates(city);
            const weatherData = await getWeather(location.latitude, location.longitude);
            showWeather(weatherData,location.name);
        } catch (error) {
            showError(error.message);
            // console.error(error);
           
        }
    });
