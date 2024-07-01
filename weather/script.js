const apiKey = 'YOUR_API_KEY';

document.getElementById('submit').addEventListener('click', function () {
    const location = document.getElementById('location').value;
    const units = document.querySelector('input[name="unit"]:checked').value;
    getWeather(location, units);
});

document.getElementById('geo').addEventListener('click', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const units = document.querySelector('input[name="unit"]:checked').value;
            getWeatherByCoordinates(latitude, longitude, units);
        }, error => {
            document.getElementById('error').textContent = 'Unable to retrieve your location.';
        });
    } else {
        document.getElementById('error').textContent = 'Geolocation is not supported by this browser.';
    }
});

function getWeather(location, units) {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=${units}`;

    fetchWeatherData(currentWeatherUrl, units);
    fetchForecastData(forecastUrl, units);
}

function getWeatherByCoordinates(lat, lon, units) {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    fetchWeatherData(currentWeatherUrl, units);
    fetchForecastData(forecastUrl, units);
}

function fetchWeatherData(url, units) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found');
            }
            return response.json();
        })
        .then(data => {
            const city = data.name;
            const temperature = data.main.temp.toFixed(1);
            const description = data.weather[0].description;
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            document.getElementById('city').textContent = city;
            document.getElementById('temperature').textContent = `${temperature}°${units === 'metric' ? 'C' : 'F'}`;
            document.getElementById('description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
            document.getElementById('icon').src = icon;
            document.querySelector('.weather-info').style.display = 'block';
            document.getElementById('error').textContent = '';

            changeBackground(description);
        })
        .catch(error => {
            document.querySelector('.weather-info').style.display = 'none';
            document.getElementById('error').textContent = error.message;
        });
}

function fetchForecastData(url, units) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching forecast');
            }
            return response.json();
        })
        .then(data => {
            const forecastContainer = document.getElementById('forecast-container');
            forecastContainer.innerHTML = '';

            const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
            dailyData.forEach(item => {
                const date = new Date(item.dt_txt);
                const day = date.toLocaleDateString('en-US', { weekday: 'short' });
                const temp = item.main.temp.toFixed(1);
                const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
                const description = item.weather[0].description;

                forecastContainer.innerHTML += `
                    <div class="forecast-item">
                        <p>${day}</p>
                        <img src="${icon}" alt="${description}">
                        <p>${temp}°${units === 'metric' ? 'C' : 'F'}</p>
                    </div>
                `;
            });

            document.querySelector('.forecast').style.display = 'block';
        })
        .catch(error => {
            document.querySelector('.forecast').style.display = 'none';
            document.getElementById('error').textContent = error.message;
        });
}

function changeBackground(description) {
    let background;
    if (description.includes('cloud')) {
        background = 'linear-gradient(to right, #bdc3c7, #2c3e50)';
    } else if (description.includes('rain') || description.includes('drizzle')) {
        background = 'linear-gradient(to right, #00c6ff, #0072ff)';
    } else if (description.includes('clear')) {
        background = 'linear-gradient(to right, #f7971e, #ffd200)';
    } else if (description.includes('snow')) {
        background = 'linear-gradient(to right, #e6dada, #274046)';
    } else {
        background = 'linear-gradient(to right, #4facfe, #00f2fe)';
    }
    document.body.style.background = background;
}
