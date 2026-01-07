const apiKey = "c07ab20c77e555db0c545e6484e1a0d4";

// DOM Elements
const searchForm = document.getElementById("search_bar");
const searchInput = document.getElementById("search_input");
const error = document.getElementById("error");
const cityName = document.getElementById("cityName");
const tempText = document.getElementById("temp");
const conditionText = document.getElementById("condition");
const weatherImg = document.getElementById("weatherImg");
const avatar = document.getElementById("weatherAvatar");
const forecastRow = document.getElementById("forecastRow");

// Search Event
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = searchInput.value.trim();

    if (!city) {
        error.textContent = "⚠️ Please enter a city name";
        return;
    }

    error.textContent = "";
    fetchWeather(city);
});

// Fetch current weather
async function fetchWeather(city) {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!res.ok) throw new Error("City not found");

        const data = await res.json();

        cityName.textContent = `${data.name}, ${data.sys.country}`;
        tempText.textContent = `${Math.round(data.main.temp)} °C`;
        conditionText.textContent = data.weather[0].description;

        weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        updateAvatar(data.weather[0].main.toLowerCase());
        fetchForecast(city);
    } catch (err) {
        error.textContent = "❌ Unable to fetch weather data";
    }
}

// Fetch 5-day forecast
async function fetchForecast(city) {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    forecastRow.innerHTML = "";

    for (let i = 0; i < data.list.length; i += 8) {
        const day = new Date(data.list[i].dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
        });

        forecastRow.innerHTML += `
      <div class="col-6 col-md-2 mb-4">
        <div class="card p-3 text-center">
          <h6>${day}</h6>
          <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" />
          <p>${Math.round(data.list[i].main.temp)} °C</p>
          <small>${data.list[i].weather[0].description}</small>
        </div>
      </div>
    `;
    }
}

function updateAvatar(weather) {
  if (weather.includes("clear")) {
    avatar.setAttribute("src", "images/sunny.json");
  } else if (weather.includes("rain")) {
    avatar.setAttribute("src", "images/rainy.json");
  } else if (weather.includes("snow")) {
    avatar.setAttribute("src", "images/snow.json");
  } else if (weather.includes("cloud")) {
    avatar.setAttribute("src", "images/cloudy.json");
  } else {
    avatar.setAttribute("src", "images/default.json");
  }
}


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});
