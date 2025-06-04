# Weather App

A simple and modern weather application that allows users to search for any city and view its current weather conditions. This app fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api) and displays it in a clean, card-style interface.

---

## Features

- **Live Weather Data:** Get up-to-date temperature, weather description, humidity, and wind speed for any city.
- **Weather Icons:** Displays a relevant weather icon for the current condition.
- **Responsive Design:** Works well on desktop and mobile browsers.
- **Clear Button:** Easily reset the search and weather display.
- **User-Friendly UI:** Simple input and visually appealing weather card.

---

## Demo

![Weather App Screenshot](screenshot.png)

---

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Obtain an OpenWeatherMap API Key

- Sign up at [OpenWeatherMap](https://openweathermap.org/api) to get a free API key.
- Replace the `apiKey` value in `script.js` with your own key:

### 3. Run the App Locally

You can simply open `weather.html` in your browser:

- Double-click `weather.html`
- **OR** right-click and choose "Open with" > your browser

If you are using a local server (like XAMPP, WAMP, or VS Code Live Server), place the project folder in your server's root directory and navigate to `http://localhost/weather.html`.

## Project Structure

weather-app/
│
├── icons/                # (Optional) Local weather icons if you use your own
├── images_/              # (Optional) Background images (not used by default)
├── weather.html          # Main HTML file
├── style.css             # App styling
├── script.js             # App logic
└── README.md             # This documentation

## How It Works

- **User enters a city name** and clicks "Get Weather".
- The app fetches weather data from OpenWeatherMap using the Fetch API.
- Weather information is displayed in a styled card, including:
  - Weather icon (from OpenWeatherMap or your own icons)
  - Temperature (°C)
  - Weather description (e.g., "Clear sky")
  - Humidity (%)
  - Wind speed (m/s)
- The "Clear" button resets the input and hides the weather card.

## Customization

- **Change Weather Icons:**  
  Download your own icons and update the logic in `script.js` to use them based on the weather description.
- **Style the Card:**  
  Edit `style.css` to change colors, fonts, or card appearance.
- **Add More Data:**  
  Display more weather details by extending the API response handling in `script.js`.

---

## Example Code Snippet

```javascript
// Fetch and display weather data
function getWeather() {
  const location = document.getElementById("location").value;
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Location not found");
      return response.json();
    })
    .then(data => {
      // ...update DOM with weather info...
    })
    .catch(() => alert("Location not found"));
}

## Troubleshooting

- **No weather info appears:**  
  - Check the browser console for errors (F12 > Console).
  - Make sure your API key is correct and active.
  - Ensure your HTML and script tags are properly closed.

- **Icons not showing:**  
  - Check the path to your icons in `script.js`.
  - Make sure the icon files exist in the specified folder.

## License
This project is open source and available under the [MIT License](LICENSE).

## Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/).
- App developed by Jefperry Achu(https://github.com/your-username).
