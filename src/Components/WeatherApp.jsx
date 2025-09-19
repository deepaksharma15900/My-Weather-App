import { Search } from 'lucide-react'
import { useRef, useState } from 'react'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function WeatherApp(){
  const inputRef = useRef();
  const[weatherData,setweatherData] = useState({});
  
  let handleChange = () => {
    console.log(inputRef.current.value);
  }
  
  let handleClick = () => {
    const getWeather = async () => {
      try {

        const city = inputRef.current.value;
        
        if (!city.trim()) {
          alert("Please enter a city name");
          return;
        }
        
        console.log(`Fetching weather for: ${city}`);
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        // Check if response is ok
        if (!res.ok) {
          if (res.status === 401) {
            throw new Error("Invalid API key. Please check your OpenWeatherMap API key.");
          } else if (res.status === 404) {
            throw new Error("City not found. Please check the city name.");
          } else {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        }
        
        // Add await here - res.json() returns a Promise
        let data = await res.json();
        console.log("Weather data:", data);
        let newData = {
            icon: data.weather[0].icon,
            city:city,
            temp: data.main.temp,
            speed:data.wind.speed ,
            humidity: data.main.humidity,
            weather:data.weather[0].main
        }
        console.log(newData);
        setweatherData(newData);
      }
      catch(err) {
        console.log('Error Occurred:', err.message);
        alert(`Error: ${err.message}`);
      }
      finally {
        console.log("Finally executed");
      }
    }
    getWeather();
  }
  function letsee(){
    console.log(weatherData);
  }
  return (
  <>
    <div className="flex flex-col justify-center items-center min-h-screen gap-6">
      {/* Search Section */}
      <div className="flex items-center gap-3">
        <input
          ref={inputRef}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleClick()} // Press Enter to search
          type="text"
          placeholder="Enter City Name"
          className="w-64 h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleClick}
          className="h-10 w-10 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Weather Details Section */}
      {weatherData.city && (
        <div className="bg-gray-300 p-6 rounded-lg shadow-md max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Weather Details</h2>
          <div className="space-y-2">
            <p className="text-lg">
              <img 
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} 
                alt="Weather Icon" 
                className="mx-auto" 
              />            
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-600">City:</span> {weatherData.city}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-600">Temperature:</span> {weatherData.temp}°C
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-600">Humidity:</span> {weatherData.humidity}%
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-600">Speed:</span> {weatherData.speed} km/h
            </p>
          </div>
        </div>
      )}
    </div>
  </>
);
}
export default WeatherApp;
