document.getElementById("location").value = "";
document.getElementById("temperature").innerHTML = "";
document.getElementById("description").innerHTML = "";
document.getElementById("humidity").innerHTML = "";
document.getElementById("wind").innerHTML = "";
document.getElementById("weather").innerHTML = "";
document.getElementById("weather").style.backgroundSize = "cover";
document.getElementById("weather").style.backgroundPosition = "center";
document.getElementById("weather").style.backgroundRepeat = "no-repeat";
// This function fetches weather data from the OpenWeatherMap API
function getWeather() {
  const location = document.getElementById("location").value;
  const apiKey = "4b527f645b54fdd9621f02ae69ad1366";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Location not found");
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const icon = data.weather[0].icon;

      document.getElementById("temperature").innerHTML = `${temperature}°C`;
      document.getElementById("description").innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
      document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`;
      document.getElementById("wind").innerHTML = `Wind: ${windSpeed} m/s`;
      document.getElementById("weather-icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />`;

      document.getElementById("weather-card").style.display = "block";
    })
    .catch((error) => {
      document.getElementById("weather-card").style.display = "none";
      alert("Location not found");
    });
}

        
// This function clears the weather display
function clearWeather() {
    document.getElementById("location").value = "";
    document.getElementById("temperature").innerHTML = "";
    document.getElementById("description").innerHTML = "";
    document.getElementById("humidity").innerHTML = "";
    document.getElementById("wind").innerHTML = "";
    document.getElementById("weather-icon").innerHTML = "";
    document.getElementById("weather-card").style.display = "none";
}
