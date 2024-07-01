# weather-forecast-
# Weather App

This enhanced weather application provides current weather conditions and a 5-day forecast, automatically detecting the user’s location with geolocation. The background changes dynamically based on the weather.

## Features

- **Input Field**: Enter a city or location to get the weather.
- **Geolocation**: Use the user's current location for weather data.
- **Current Weather**: Displays temperature, weather description, and an icon.
- **5-Day Forecast**: Displays daily temperatures and icons for the next 5 days.
- **Unit Conversion**: Switch between Celsius and Fahrenheit.
- **Dynamic Background**: Changes based on the weather condition.
- **Responsive Design**: Ensures a good look on various screen sizes.
- **Error Handling**: Displays appropriate messages for invalid locations or network issues.

## Technologies Used

- **HTML**: Structure of the app.
- **CSS**: Styling and layout.
- **JavaScript**: Fetching weather data and interactivity.
- **OpenWeatherMap API**: Public weather API used to fetch weather data.

## How to Run

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/your-username/weather-app.git
    ```

2. **Navigate to the Project Directory**:
    ```sh
    cd weather-app
    ```

3. **Open `index.html`**:
    Open the `index.html` file in your web browser.

4. **Enter API Key**:
    Replace `'YOUR_API_KEY'` in `script.js` with your actual OpenWeatherMap API key.

## File Structure

- `index.html`: Main HTML file.
- `styles.css`: CSS file for styling the app.
- `script.js`: JavaScript file for fetching and displaying weather data.

## Usage

- **Enter Location**: Type a city or location and click "Get Weather".
- **Use Geolocation**: Click "Use My Location" to fetch weather for the current location.
- **Switch Units**: Choose between Celsius and Fahrenheit.
- **View Forecast**: See the 5-day weather forecast with daily details.

## Example Screenshots

### Main Screen
![Main Screen](screenshots/main-screen.png)

### Weather Details
![Weather Details](screenshots/weather-details.png)

### 5-Day Forecast
![5-Day Forecast](screenshots/forecast.png)

## Error Handling

The app displays appropriate error messages for:
- Invalid location entries.
- Issues with the API request.

## Additional Notes

- Ensure your browser has permission to access location for the geolocation feature.
- The app uses data at 12:00 PM for the 5-day forecast.
- The dynamic background changes based on weather conditions like clear, cloudy, rainy, or snowy.


