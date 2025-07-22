import React, { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      setWeather(res.data);
    } catch (err) {
      setError(err.response?.data?.error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-200 dark:border-gray-700">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-700 dark:text-blue-300 tracking-tight">
          <span role="img" aria-label="weather">
            🌤️
          </span>{" "}
          Weather App
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter city"
            className="flex-1 border border-blue-300 dark:border-gray-600 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {loading && (
          <div className="flex flex-col items-center gap-2 my-8">
            <svg
              className="animate-spin h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Loading...
            </p>
          </div>
        )}

        {error && (
          <p className="text-center text-red-600 dark:text-red-400 font-medium my-4">
            {error}
          </p>
        )}

        {weather && (
          <div className="text-center mt-6">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {weather.location.name},{" "}
                <span className="text-blue-600 dark:text-blue-300">
                  {weather.location.country}
                </span>
              </h2>
              <img
                src={weather.current.condition.icon}
                alt="weather icon"
                className="w-20 h-20 mx-auto"
              />
              <p className="text-5xl font-extrabold text-blue-700 dark:text-blue-300 mt-2">
                {weather.current.temp_c}°C
              </p>
              <p className="capitalize text-lg text-gray-700 dark:text-gray-300 mt-1">
                {weather.current.condition.text}
              </p>
            </div>
            <div className="flex justify-center gap-8 mt-6">
              <div className="flex flex-col items-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Humidity
                </span>
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {weather.current.humidity}%
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Wind
                </span>
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {weather.current.wind_kph} kph
                </span>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
              Last updated: {weather.current.last_updated}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;