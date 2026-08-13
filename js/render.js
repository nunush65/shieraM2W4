export function showWeather(data,cityName) {
    const display = `
            <div class="bg-blue-600 text-white rounded-xl p-5">
                <h2 class="text-2xl font-bold">${cityName}</h2>
                <p class="text-lg mt-2">
                      Today: ${data.current.temperature_2m}°C
                  </p>
           </div>`;
           
    document.getElementById('todayWeather').innerHTML = display;

    const forecast = data.daily.time.map((day, index) => {
        return `
   
             <li class="bg-slate-50 border border-slate-200 rounded-lg p-4
               flex flex-col gap-1">
       
                 <strong class="text-slate-800">${day}</strong>
                  <span class="text-slate-600">
                   Max: ${data.daily.temperature_2m_max[index]}°C
                   </span>
                  <span class="text-slate-600">
                 Min: ${data.daily.temperature_2m_min[index]}°C
                </span>
             </li>`;

    }).join('');

    document.getElementById('forecast-list').innerHTML = forecast;
}

export function showLoading() {
    document.getElementById('todayWeather').textContent = 'Loading...';
    document.getElementById('forecast-list').innerHTML =
        '<li>Loading forecast...</li>';
}

export function showError(message) {
    document.getElementById('todayWeather').textContent = message;
    document.getElementById('forecast-list').innerHTML =
        '<li>Unable to load forecast.</li>';
}

export function showIdle() {
    document.getElementById('todayWeather').textContent =
        'Search for a city to see the weather.';
    document.getElementById('forecast-list').innerHTML =
        '<li>No forecast yet.</li>';
}
