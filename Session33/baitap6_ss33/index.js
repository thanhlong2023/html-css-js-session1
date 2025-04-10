const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

const weatherList = document.querySelector(".weather-info");
const input = document.getElementById("city-input");
const button = document.getElementById("search-btn");

function renderWeatherAll(cityFilter = "") {
    let textWeather = "";

    for (const city in weatherData) {
        if (city.toLowerCase().includes(cityFilter.toLowerCase())) {
            const data = weatherData[city];
            textWeather += `
                <div class="city-weather-box">
                    <h2>${city}</h2>
                    <div class="sub-weather-info">
                        <span class="weather-icon">${data.icon}</span>
                        <p class="temperature">${data.temperature}°C</p>
                        <div class="weather-details">
                            <p>${data.description}</p>
                            <p>Độ ẩm: ${data.humidity}%</p>
                            <p>Tốc độ gió: ${data.windSpeed} km/h</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    if (textWeather === "") {
        textWeather = `<p>Không tìm thấy thành phố nào phù hợp.</p>`;
    }

    weatherList.innerHTML = textWeather;
}

input.addEventListener("input", () => {
    const city = input.value.trim();
    renderWeatherAll(city);
});

button.addEventListener("click", () => {
    const city = input.value.trim();
    renderWeatherAll(city);
});

renderWeatherAll();
