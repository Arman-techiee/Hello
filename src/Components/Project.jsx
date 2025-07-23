import React, { useState } from 'react';
import Weather from './Weather';
import NewsApp from './NewsApp';
import TypingTest from './TypingTest';
import MovieRatingApp from './MovieRatingApp'; // Import the MovieRatingApp component
import { useLocation } from 'react-router-dom';

const Project = () => {
  const location = useLocation();
  // Can be 'weather', 'news', 'typing', or 'movies'. Default to showing the News App.
  const [activeApp, setActiveApp] = useState(location.state?.defaultApp || 'news');

  const getButtonClasses = (appName) => {
    const baseClasses = "py-3 px-6 text-lg font-medium focus:outline-none transition-all duration-300 rounded-lg";
    if (activeApp === appName) {
      return `${baseClasses} text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg`;
    }
    return `${baseClasses} text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700`;
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          My Projects
        </h1>
        
        <nav className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 flex flex-wrap gap-2 justify-center">
            <button
              className={getButtonClasses('weather')}
              onClick={() => setActiveApp('weather')}
            >
              ☁️ Weather App
            </button>
            <button
              className={getButtonClasses('news')}
              onClick={() => setActiveApp('news')}
            >
              📰 News App
            </button>
            <button
              className={getButtonClasses('typing')}
              onClick={() => setActiveApp('typing')}
            >
              ⌨️ Typing Test
            </button>
            <button
              className={getButtonClasses('movies')}
              onClick={() => setActiveApp('movies')}
            >
              🎬 Movie Rating
            </button>
          </div>
        </nav>

        <main>
          {activeApp === 'weather' && <Weather />}
          {activeApp === 'news' && <NewsApp />}
          {activeApp === 'typing' && <TypingTest />}
          {activeApp === 'movies' && <MovieRatingApp />}
        </main>
      </div>
    </div>
  );
};

export default Project;