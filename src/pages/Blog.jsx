import React, { useState, useMemo } from "react";

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices and Architecture Patterns",
      excerpt: "Explore advanced techniques for structuring React applications that can grow with your team and user base. Learn about component composition, state management, and performance optimization strategies.",
      content: "In this comprehensive guide, we'll dive deep into the architectural decisions that make React applications maintainable and scalable...",
      author: "Arman Khan",
      date: "2024-12-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Architecture", "Best Practices", "Performance"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "The Future of Web Development: Emerging Technologies and Trends",
      excerpt: "Stay ahead of the curve with insights into the latest web development trends, from AI integration to progressive web apps and the evolving JavaScript ecosystem.",
      content: "The web development landscape is constantly evolving, with new technologies and methodologies emerging regularly...",
      author: "Arman Khan",
      date: "2024-12-10",
      readTime: "6 min read",
      category: "Web Development",
      tags: ["Web Development", "Trends", "AI", "PWA"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Mastering CSS Grid and Flexbox: A Complete Guide to Modern Layouts",
      excerpt: "Learn how to create responsive, flexible layouts using CSS Grid and Flexbox. This guide covers practical examples and common use cases for modern web design.",
      content: "CSS Grid and Flexbox have revolutionized how we approach layout design on the web...",
      author: "Arman Khan",
      date: "2024-12-05",
      readTime: "10 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox", "Layout", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Node.js Performance Optimization: Tips and Best Practices",
      excerpt: "Discover essential techniques for optimizing Node.js applications, from memory management to database optimization and caching strategies.",
      content: "Performance is crucial for any Node.js application, especially as it scales...",
      author: "Arman Khan",
      date: "2024-11-28",
      readTime: "7 min read",
      category: "Node.js",
      tags: ["Node.js", "Performance", "Optimization", "Backend"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Creating Accessible Web Applications: A Developer's Guide",
      excerpt: "Learn the fundamentals of web accessibility and how to build inclusive applications that work for everyone. Covers ARIA, semantic HTML, and testing strategies.",
      content: "Web accessibility isn't just a nice-to-have feature—it's essential for creating inclusive digital experiences...",
      author: "Arman Khan",
      date: "2024-11-20",
      readTime: "9 min read",
      category: "Accessibility",
      tags: ["Accessibility", "ARIA", "Semantic HTML", "UX"],
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "JavaScript ES2024: New Features and What They Mean for Developers",
      excerpt: "Explore the latest JavaScript features and how they can improve your code. From new array methods to enhanced async capabilities.",
      content: "JavaScript continues to evolve with each new specification, bringing powerful new features...",
      author: "Arman Khan",
      date: "2024-11-15",
      readTime: "5 min read",
      category: "JavaScript",
      tags: ["JavaScript", "ES2024", "New Features", "Language"],
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Get unique categories
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on search term and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, blogPosts]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Reset pagination when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Development Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, emerging technologies, and best practices
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
              />
              <div className="absolute left-3 top-3.5 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </div>
        </div>

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {currentPosts.map(post => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Featured Image */}
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='%236b7280'%3E" + post.category + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-gray-500 dark:text-gray-400 text-xs py-1">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Read More Button */}
                  <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">No articles found</h3>
            <p className="text-gray-500 dark:text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;