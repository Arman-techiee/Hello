import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Star, Calendar, Clock, Heart, BookmarkPlus } from 'lucide-react';

const MovieRatingApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userRatings, setUserRatings] = useState({});
  const [watchlist, setWatchlist] = useState(new Set());
  const [favorites, setFavorites] = useState(new Set());

  const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
        params: {
          api_key: API_KEY
        }
      });
      setMovies(response.data.results.slice(0, 20));
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      setMovies([]);
    }
    setLoading(false);
  };

  const searchMovies = async (query) => {
    if (!query.trim()) {
      fetchTrendingMovies();
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: query
        }
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
      setMovies([]);
    }
    setLoading(false);
  };

  const fetchMovieDetails = async (movieId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: API_KEY
        }
      });
      setSelectedMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    searchMovies(searchQuery);
  };

  const rateMovie = (movieId, rating) => {
    setUserRatings(prev => ({
      ...prev,
      [movieId]: rating
    }));
  };

  const toggleWatchlist = (movieId) => {
    setWatchlist(prev => {
      const newSet = new Set(prev);
      if (newSet.has(movieId)) {
        newSet.delete(movieId);
      } else {
        newSet.add(movieId);
      }
      return newSet;
    });
  };

  const toggleFavorite = (movieId) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(movieId)) {
        newSet.delete(movieId);
      } else {
        newSet.add(movieId);
      }
      return newSet;
    });
  };

  const StarRating = ({ movieId, currentRating = 0, onRate, size = 20 }) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={`cursor-pointer transition-colors ${
              star <= (hoverRating || currentRating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-400 hover:text-yellow-400'
            }`}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => onRate(movieId, star)}
          />
        ))}
        {currentRating > 0 && (
          <span className="ml-2 text-sm text-gray-600">({currentRating}/5)</span>
        )}
      </div>
    );
  };

  const MovieCard = ({ movie }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : '/api/placeholder/300/400'}
          alt={movie.title}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.target.src = '/api/placeholder/300/400';
          }}
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={() => toggleFavorite(movie.id)}
            className={`p-2 rounded-full transition-colors ${
              favorites.has(movie.id)
                ? 'bg-red-500 text-white'
                : 'bg-black/50 text-white hover:bg-red-500'
            }`}
          >
            <Heart size={16} fill={favorites.has(movie.id) ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={() => toggleWatchlist(movie.id)}
            className={`p-2 rounded-full transition-colors ${
              watchlist.has(movie.id)
                ? 'bg-blue-500 text-white'
                : 'bg-black/50 text-white hover:bg-blue-500'
            }`}
          >
            <BookmarkPlus size={16} />
          </button>
        </div>
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-lg text-sm flex items-center gap-1">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{movie.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{movie.overview}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Calendar size={14} />
            {movie.release_date ? new Date(movie.release_date).getFullYear() : 'Unknown'}
          </div>
        </div>

        <div className="mb-3">
          <StarRating
            movieId={movie.id}
            currentRating={userRatings[movie.id] || 0}
            onRate={rateMovie}
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => fetchMovieDetails(movie.id)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const MovieModal = ({ movie, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : 
                 movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : '/api/placeholder/800/400'}
            alt={movie.title}
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.target.src = '/api/placeholder/800/400';
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-white text-3xl font-bold mb-2">{movie.title}</h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={18} />
                {movie.release_date ? new Date(movie.release_date).getFullYear() : 'Unknown'}
              </div>
              {movie.runtime && (
                <div className="flex items-center gap-1">
                  <Clock size={18} />
                  {movie.runtime} min
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3">Rate This Movie</h2>
            <StarRating
              movieId={movie.id}
              currentRating={userRatings[movie.id] || 0}
              onRate={rateMovie}
              size={24}
            />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{movie.overview}</p>
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => toggleWatchlist(movie.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                watchlist.has(movie.id)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <BookmarkPlus size={18} />
              {watchlist.has(movie.id) ? 'In Watchlist' : 'Add to Watchlist'}
            </button>
            <button
              onClick={() => toggleFavorite(movie.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                favorites.has(movie.id)
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Heart size={18} fill={favorites.has(movie.id) ? 'currentColor' : 'none'} />
              {favorites.has(movie.id) ? 'Favorited' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎬 Movie Rating App
          </h1>
          <p className="text-gray-600 text-lg">
            Discover, rate, and track your favorite movies
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for movies..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Search
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-blue-600">{Object.keys(userRatings).length}</div>
            <div className="text-gray-600">Movies Rated</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-green-600">{watchlist.size}</div>
            <div className="text-gray-600">In Watchlist</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-red-600">{favorites.size}</div>
            <div className="text-gray-600">Favorites</div>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading movies...</p>
          </div>
        )}

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Empty State */}
        {!loading && movies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No movies found</h3>
            <p className="text-gray-500">Try searching for a different movie title</p>
          </div>
        )}

        {/* Movie Modal */}
        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    </div>
  );
};

export default MovieRatingApp;