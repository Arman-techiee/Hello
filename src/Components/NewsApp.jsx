import React, { useState } from "react";
import axios from "axios";

// Your API key from .env file
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const NewsApp = () => {
  // States to store news, loading status, and error messages
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to get news about Nepal
  const fetchNepalNews = async () => {
    setLoading(true); // show loading
    setError("");     // clear any previous error
    setArticles([]);  // clear old news

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=nepal&sortBy=publishedAt&pageSize=10&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles); // save articles to state
    } catch (err) {
      setError("Sorry! Could not load news. Please try again."); // show error
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 dark:bg-gray-800 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">📰 Nepal News</h1>

        {/* Load news button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={fetchNepalNews}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Load News
          </button>
        </div>

        {/* Show loading text */}
        {loading && <p className="text-center text-gray-500 dark:text-gray-400">Loading news...</p>}

        {/* Show error if any */}
        {error && <p className="text-center text-red-500 dark:text-red-400">{error}</p>}

        {/* Show news articles */}
        {articles.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {articles.map((article, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded shadow">
                <h2 className="font-semibold text-md mb-2 text-gray-800 dark:text-gray-100">{article.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {article.description || "No description available."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 text-sm hover:underline dark:hover:text-blue-300"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsApp;
