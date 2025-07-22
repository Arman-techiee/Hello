import React, { useState, useCallback } from "react";
import axios from "axios";
import { Newspaper, AlertTriangle, Loader2 } from "lucide-react";

// Your API key from .env file
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_API_URL = "https://newsapi.org/v2/everything";

// --- Helper Components ---

// Skeleton loader for a more professional loading state
const NewsCardSkeleton = () => (
  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg shadow-md animate-pulse">
    <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-md mb-4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-1"></div>
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
  </div>
);

// Component to display a single news article
const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt, source } = article;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <img
          src={urlToImage || `https://source.unsplash.com/random/500x300?news,nepal&sig=${title}`}
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://source.unsplash.com/random/500x300?news,nepal&sig=${title}`;
          }}
        />
      </a>
      <div className="p-6 flex-grow flex flex-col">
        <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 line-clamp-3">
          <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </a>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-4 flex-grow">
          {description || "No description available."}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <span>{source.name}</span>
          <span>{formatDate(publishedAt)}</span>
        </div>
      </div>
    </article>
  );
};

// --- Main Component ---

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'succeeded' | 'failed'
  const [error, setError] = useState(null);

  const fetchNepalNews = useCallback(async () => {
    setStatus("loading");
    setError(null);

    try {
      const response = await axios.get(NEWS_API_URL, {
        params: {
          q: "nepal",
          sortBy: "publishedAt",
          pageSize: 10,
          apiKey: API_KEY,
        },
      });
      setArticles(response.data.articles);
      setStatus("succeeded");
    } catch (err) {
      console.error("Failed to fetch news:", err);
      const errorMessage = err.response?.data?.message || "Could not load news. Please try again later.";
      setError(errorMessage);
      setStatus("failed");
    }
  }, []);

  const renderContent = () => {
    switch (status) {
      case "loading":
        return (
          <div className="grid gap-6 sm:grid-cols-2">
            {[...Array(4)].map((_, i) => <NewsCardSkeleton key={i} />)}
          </div>
        );
      case "succeeded":
        return (
          <div className="grid gap-6 sm:grid-cols-2">
            {articles.map((article) => (
              <NewsCard key={article.url} article={article} />
            ))}
          </div>
        );
      case "failed":
        return (
          <div className="text-center py-10 px-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <AlertTriangle className="mx-auto h-12 w-12 text-red-400" />
            <h3 className="mt-2 text-lg font-medium text-red-800 dark:text-red-300">
              An error occurred
            </h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-400">{error}</p>
          </div>
        );
      case "idle":
      default:
        return (
          <div className="text-center py-10">
            <Newspaper className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-200">
              Latest News from Nepal
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Click the button to fetch the latest headlines.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900/95 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Nepal News Feed
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Your daily source for headlines from Nepal.
          </p>
        </header>

        <div className="flex justify-center mb-8">
          <button
            onClick={fetchNepalNews}
            disabled={status === "loading"}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed dark:focus:ring-offset-gray-900 transition-all"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <Newspaper className="-ml-1 mr-2 h-5 w-5" />
                <span>Fetch Latest News</span>
              </>
            )}
          </button>
        </div>

        <main>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default NewsApp;
