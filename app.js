document.getElementById('search-btn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city-input').value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiKey = '14cbcbdc51f99d856928ccb3b39df702';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert('City not found');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDesc = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDesc}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;

    weatherInfo.style.display = 'block';
}
