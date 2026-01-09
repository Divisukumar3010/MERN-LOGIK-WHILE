    const apiKey = "c07ab20c77e555db0c545e6484e1a0d4";

    // DOM Elements
    const searchForm = document.getElementById("search_bar");
    const searchInput = document.getElementById("search_input");
    const error = document.getElementById("error");
    const cityName = document.getElementById("cityName");
    const tempText = document.getElementById("temp");
    const conditionText = document.getElementById("condition");
    const weatherImg = document.getElementById("weatherImg");
    const character = document.querySelector(".character");
    const forecastRow = document.getElementById("forecastRow");
    const canvas = document.getElementById("weatherCanvas");
    const ctx = canvas.getContext("2d");

    // Canvas setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Weather Animation System
    let particles = [];

    class Particle {
      constructor(type) {
        this.x = Math.random() * canvas.width;
        this.y = type === "snow" ? Math.random() * canvas.height : -10;
        this.type = type;

        if (type === "rain") {
          this.speed = Math.random() * 5 + 10;
          this.length = Math.random() * 20 + 10;
          this.opacity = Math.random() * 0.5 + 0.5;
        } else if (type === "snow") {
          this.speed = Math.random() * 2 + 1;
          this.size = Math.random() * 4 + 2;
          this.opacity = Math.random() * 0.6 + 0.4;
          this.drift = Math.random() * 2 - 1;
        } else if (type === "cloud") {
          this.speed = Math.random() * 0.5 + 0.2;
          this.size = Math.random() * 60 + 40;
          this.opacity = Math.random() * 0.3 + 0.1;
          this.y = Math.random() * canvas.height * 0.5;
        }
      }

      update() {
        if (this.type === "rain") {
          this.y += this.speed;
          if (this.y > canvas.height) {
            this.y = -this.length;
            this.x = Math.random() * canvas.width;
          }
        } else if (this.type === "snow") {
          this.y += this.speed;
          this.x += this.drift;
          if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
          }
          if (this.x > canvas.width) this.x = 0;
          if (this.x < 0) this.x = canvas.width;
        } else if (this.type === "cloud") {
          this.x += this.speed;
          if (this.x > canvas.width + this.size) {
            this.x = -this.size;
          }
        }
      }

      draw() {
        ctx.save();
        if (this.type === "rain") {
          ctx.strokeStyle = `rgba(174, 194, 224, ${this.opacity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x, this.y + this.length);
          ctx.stroke();
        } else if (this.type === "snow") {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === "cloud") {
          ctx.fillStyle = `rgba(200, 200, 220, ${this.opacity})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2);
          ctx.arc(this.x + this.size * 0.5, this.y, this.size * 0.8, 0, Math.PI * 2);
          ctx.arc(this.x + this.size, this.y, this.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    function createParticles(type, count) {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(type));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Update character based on weather
    function updateCharacter(weather, temp) {
      // Remove all weather classes
      character.className = 'character';

      const w = weather.toLowerCase();

      if (w.includes("clear") || w.includes("sunny")) {
        character.classList.add('sunny');
        createParticles("clear", 0);
      } else if (w.includes("rain") || w.includes("drizzle")) {
        character.classList.add('rainy');
        createParticles("rain", 150);
      } else if (w.includes("snow")) {
        character.classList.add('cold');
        createParticles("snow", 100);
      } else if (w.includes("cloud")) {
        character.classList.add('cloudy');
        createParticles("cloud", 8);
      } else if (w.includes("thunder") || w.includes("storm")) {
        character.classList.add('thunderstorm');
        createParticles("rain", 200);
      } else if (w.includes("mist") || w.includes("fog")) {
        character.classList.add('cloudy');
        createParticles("cloud", 15);
      } else {
        character.classList.add('clear');
        particles = [];
      }

      // Add cold shivering if temperature is low
      if (temp < 10 && !w.includes("snow")) {
        character.classList.add('cold');
      }

      // Add wind effect for windy conditions
      if (w.includes("wind")) {
        character.classList.add('windy');
      }
    }

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
        conditionText.textContent = data.weather[0].description.charAt(0).toUpperCase() +
          data.weather[0].description.slice(1);

        weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        weatherImg.alt = data.weather[0].description;

        updateCharacter(data.weather[0].main, data.main.temp);
        fetchForecast(city);
      } catch (err) {
        error.textContent = "❌ Unable to fetch weather data. Please check the city name.";
        console.error(err);
      }
    }

    // Fetch 5-day forecast
    async function fetchForecast(city) {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!res.ok) throw new Error("Forecast not found");

        const data = await res.json();
        forecastRow.innerHTML = "";

        for (let i = 0; i < data.list.length; i += 8) {
          const forecast = data.list[i];
          const date = new Date(forecast.dt * 1000);
          const day = date.toLocaleDateString("en-US", { weekday: "short" });
          const fullDate = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

          forecastRow.innerHTML += `
            <div class="col-6 col-md-2 mb-4">
              <div class="card p-3 text-center">
                <h6 class="fw-bold">${day}</h6>
                <small class="text-muted">${fullDate}</small>
                <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" 
                     alt="${forecast.weather[0].description}" 
                     class="img-fluid" />
                <p class="mb-1 fw-bold">${Math.round(forecast.main.temp)} °C</p>
                <small>${forecast.weather[0].description}</small>
              </div>
            </div>
          `;
        }
      } catch (err) {
        forecastRow.innerHTML = '<p class="text-center text-danger">Unable to load forecast</p>';
        console.error(err);
      }
    }

    // Theme Toggle
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

      if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
        themeToggle.classList.remove("btn-warning");
        themeToggle.classList.add("btn-dark");
      } else {
        themeToggle.textContent = "🌙 Dark Mode";
        themeToggle.classList.remove("btn-dark");
        themeToggle.classList.add("btn-warning");
      }
    });

    // Load default city on page load
    window.addEventListener("load", () => {
      fetchWeather("London");
    });