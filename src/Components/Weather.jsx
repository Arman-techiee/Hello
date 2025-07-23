import React, { useState, useEffect } from "react";
import { Search, MapPin, Thermometer, Droplets, Wind, Eye, Gauge, Clock, RefreshCw, AlertCircle, TrendingUp } from "lucide-react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  // WeatherAPI.com integration using environment variable
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const BASE_URL = "https://api.weatherapi.com/v1";

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    if (!API_KEY) {
      setError("Please add your WeatherAPI.com API key to the .env file as VITE_WEATHER_API_KEY");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await axios.get(`${BASE_URL}/current.json`, {
        params: {
          key: API_KEY,
          q: city,
          aqi: 'yes'
        }
      });

      const data = response.data;
      
      setWeather(data);
      setLastUpdated(new Date());
      
      // Add to search history
      const searchTerm = data.location.name;
      if (!searchHistory.some(item => item.toLowerCase() === searchTerm.toLowerCase())) {
        setSearchHistory(prev => [searchTerm, ...prev.slice(0, 4)]);
      }
    } catch (err) {
      if (err.response) {
        // Handle different HTTP status codes
        switch (err.response.status) {
          case 400:
            setError("City not found. Please check the spelling and try again.");
            break;
          case 401:
            setError("Invalid API key. Please check your WeatherAPI credentials.");
            break;
          case 403:
            setError("API key quota exceeded. Please upgrade your plan.");
            break;
          default:
            setError("Failed to fetch weather data. Please try again later.");
        }
      } else if (err.request) {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(err.message || "Unable to fetch weather data. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  const handleHistoryClick = (historicalCity) => {
    setCity(historicalCity);
    setTimeout(() => {
      const originalCity = city;
      setCity(historicalCity);
      // Trigger fetch after state update
      setTimeout(fetchWeather, 100);
    }, 50);
  };

  const getUVIndexLevel = (uv) => {
    if (uv <= 2) return { level: "Low", color: "text-green-600", bg: "bg-green-50" };
    if (uv <= 5) return { level: "Moderate", color: "text-yellow-600", bg: "bg-yellow-50" };
    if (uv <= 7) return { level: "High", color: "text-orange-600", bg: "bg-orange-50" };
    if (uv <= 10) return { level: "Very High", color: "text-red-600", bg: "bg-red-50" };
    return { level: "Extreme", color: "text-purple-600", bg: "bg-purple-50" };
  };

  const MetricCard = ({ icon: Icon, label, value, unit, sublabel, colorClass = "text-blue-600" }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <Icon className={`w-5 h-5 ${colorClass}`} />
        <span className="text-2xl font-bold text-gray-900">{value}{unit}</span>
      </div>
      <div className="text-sm font-medium text-gray-700">{label}</div>
      {sublabel && <div className="text-xs text-gray-500 mt-1">{sublabel}</div>}
    </div>
  );

  // Function to get wind direction in degrees
  const getWindDirection = (direction) => {
    const directions = {
      'N': '0°', 'NNE': '22.5°', 'NE': '45°', 'ENE': '67.5°',
      'E': '90°', 'ESE': '112.5°', 'SE': '135°', 'SSE': '157.5°',
      'S': '180°', 'SSW': '202.5°', 'SW': '225°', 'WSW': '247.5°',
      'W': '270°', 'WNW': '292.5°', 'NW': '315°', 'NNW': '337.5°'
    };
    return directions[direction] || direction;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Thermometer className="w-8 h-8 text-blue-600 mr-3" />
                Weather Intelligence Platform
              </h1>
              <p className="text-gray-600 mt-2">
                Real-time meteorological data powered by WeatherAPI.com
              </p>
            </div>
            {lastUpdated && (
              <div className="text-right">
                <div className="text-sm text-gray-500">Last Updated</div>
                <div className="text-gray-900 font-medium">
                  {lastUpdated.toLocaleTimeString()}
                </div>
              </div>
            )}
          </div>

          {/* API Key Notice */}
          {!API_KEY && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                <div>
                  <h3 className="text-sm font-semibold text-yellow-800">API Key Required</h3>
                  <p className="text-yellow-700 text-sm mt-1">
                    Please get your free API key from{" "}
                    <a href="https://www.weatherapi.com/" target="_blank" rel="noopener noreferrer" className="underline">
                      WeatherAPI.com
                    </a>{" "}
                    and add it to your .env file as VITE_WEATHER_API_KEY
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Search Section */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter city name (e.g., London, New York, Tokyo)"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
                <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button
              onClick={fetchWeather}
              disabled={loading || !API_KEY}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Search className="w-4 h-4 mr-2" />
              )}
              {loading ? "Fetching Data..." : "Get Weather Data"}
            </button>
          </div>

          {/* Search History */}
          {searchHistory.length > 0 && (
            <div className="mt-4">
              <div className="text-sm text-gray-600 mb-2">Recent Searches:</div>
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((historyCity, index) => (
                  <button
                    key={index}
                    onClick={() => handleHistoryClick(historyCity)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {historyCity}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
            <div className="flex flex-col items-center">
              <RefreshCw className="w-8 h-8 text-blue-500 animate-spin mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fetching Weather Data</h3>
              <p className="text-gray-600 text-center">
                Retrieving current weather conditions from WeatherAPI.com...
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">Error</h3>
                <p className="text-red-700 mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Weather Data */}
        {weather && !loading && (
          <div className="space-y-6">
            {/* Primary Weather Card */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-bold">
                      {weather.location.name}, {weather.location.country}
                    </h2>
                  </div>
                  <p className="text-blue-100 mb-4">
                    {weather.location.region && weather.location.region !== weather.location.name 
                      ? `${weather.location.region}, ${weather.location.country}` 
                      : weather.location.country}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={`https:${weather.current.condition.icon}`}
                      alt={weather.current.condition.text}
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <div className="text-5xl font-bold mb-1">{weather.current.temp_c}°C</div>
                      <div className="text-blue-100">Feels like {weather.current.feelslike_c}°C</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-semibold mb-2">{weather.current.condition.text}</div>
                  <div className="text-blue-100 text-lg">
                    {weather.current.temp_f}°F
                  </div>
                  <div className="text-blue-100 text-sm mt-4">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {weather.location.localtime}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                icon={Droplets}
                label="Humidity"
                value={weather.current.humidity}
                unit="%"
                sublabel="Relative humidity"
                colorClass="text-blue-600"
              />
              <MetricCard
                icon={Wind}
                label="Wind"
                value={weather.current.wind_kph}
                unit=" km/h"
                sublabel={`${weather.current.wind_dir} (${getWindDirection(weather.current.wind_dir)})`}
                colorClass="text-green-600"
              />
              <MetricCard
                icon={Gauge}
                label="Pressure"
                value={weather.current.pressure_mb}
                unit=" mb"
                sublabel={`${weather.current.pressure_in}" Hg`}
                colorClass="text-purple-600"
              />
              <MetricCard
                icon={Eye}
                label="Visibility"
                value={weather.current.vis_km}
                unit=" km"
                sublabel={`${weather.current.vis_miles} miles`}
                colorClass="text-orange-600"
              />
            </div>

            {/* Additional Information */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  UV Index & Air Quality
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{weather.current.uv}</div>
                      <div className="text-gray-600">UV Index</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full ${getUVIndexLevel(weather.current.uv).bg}`}>
                      <span className={`font-semibold text-sm ${getUVIndexLevel(weather.current.uv).color}`}>
                        {getUVIndexLevel(weather.current.uv).level}
                      </span>
                    </div>
                  </div>
                  {weather.current.air_quality && (
                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600 mb-2">Air Quality Index</div>
                      <div className="text-lg font-semibold text-gray-900">
                        US EPA: {Math.round(weather.current.air_quality.us_epa_index || 0)}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Location Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Country:</span>
                    <span className="font-medium">{weather.location.country}</span>
                  </div>
                  {weather.location.region && weather.location.region !== weather.location.name && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Region:</span>
                      <span className="font-medium">{weather.location.region}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coordinates:</span>
                    <span className="font-medium">{weather.location.lat}°, {weather.location.lon}°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Local Time:</span>
                    <span className="font-medium">{weather.location.localtime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timezone:</span>
                    <span className="font-medium">{weather.location.tz_id}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Weather Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Details</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-gray-600">Cloud Cover</div>
                  <div className="text-lg font-semibold text-gray-900">{weather.current.cloud}%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Dew Point</div>
                  <div className="text-lg font-semibold text-gray-900">{weather.current.dewpoint_c}°C</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Heat Index</div>
                  <div className="text-lg font-semibold text-gray-900">{weather.current.heatindex_c}°C</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Wind Chill</div>
                  <div className="text-lg font-semibold text-gray-900">{weather.current.windchill_c}°C</div>
                </div>
              </div>
            </div>

            {/* Data Timestamp */}
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Last observation: {weather.current.last_updated}</span>
                <span>Data provided by WeatherAPI.com</span>
              </div>
            </div>
          </div>
        )}

        {/* Initial State */}
        {!weather && !loading && !error && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <Thermometer className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Weather Intelligence Ready
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Enter a city name above to access comprehensive meteorological data, 
              atmospheric conditions, and environmental metrics powered by WeatherAPI.com.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;