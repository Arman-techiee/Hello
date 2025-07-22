import React, { useState } from 'react';
import Weather from './Weather';
import NewsApp from './NewsApp';

const Project = () => {
  // Can be 'weather' or 'news'. Defaults to showing the News App.
  const [activeApp, setActiveApp] = useState('news');

  const getButtonClasses = (appName) => {
    const baseClasses = "py-2 px-6 text-lg font-medium focus:outline-none transition-colors duration-300";
    if (activeApp === appName) {
      return `${baseClasses} text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400`;
    }
    return `${baseClasses} text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200`;
  };

  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">My Projects</h1>
        <nav className="flex justify-center mb-8 border-b border-gray-300 dark:border-gray-700">
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
        </nav>

        <main>
          {activeApp === 'weather' && <Weather />}
          {activeApp === 'news' && <NewsApp />}
        </main>
      </div>
    </div>
  );
};

export default Project;