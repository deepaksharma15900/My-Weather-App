# 🌦️ Weather Forecast App

A simple and responsive weather forecast application built with **React.js (Vite)** and **Tailwind CSS**.  
It fetches real-time weather data using the **OpenWeatherMap API** and displays details such as temperature, humidity, and wind speed.

---

## ✨ Features
- 🔍 Search weather by city name (via input or pressing **Enter** key).  
- 🌡️ Displays **temperature, humidity, and wind speed**.  
- 🎨 Clean, responsive UI built with Tailwind CSS.  
- ⚡ Real-time weather data using OpenWeatherMap API.  
- 🛡️ API key stored securely in `.env` file.  

---

## 🛠️ Tech Stack
- **React.js (Vite)**  
- **Tailwind CSS**  
- **OpenWeatherMap API**  

---

## 🚀 Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. Install dependencies:

  npm install

3. Create a .env file in the project root and add your API key:

  VITE_WEATHER_API_KEY=your_api_key_here

4. Start the development server:

  npm run dev

Project Structure
weather-app/
 ├── src/
 │   ├── components/
 │   │   └── WeatherApp.jsx
 │   ├── App.jsx
 │   └── main.jsx
 ├── public/
 ├── .env.example
 ├── .gitignore
 ├── package.json
 └── README.md