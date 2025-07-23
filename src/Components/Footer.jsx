import React from "react";

const Footer = () => (
  <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </div>

    <div className="relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Brand & About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Arman Khan
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              BIT student passionate about innovative tech solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium">
                BIT Student
              </span>
              <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium">
                Developer
              </span>
              <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 text-green-300 rounded-full text-sm font-medium">
                Researcher
              </span>
            </div>
          </div>

          {/* Connect & Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-6 text-gray-100 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              Let's Connect
            </h4>
            
            {/* Primary Contact Links */}
            <div className="space-y-3 mb-6">
              <a
                href="https://github.com/Arman-techiee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-gray-800/50 hover:bg-gray-700/70 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-500 group-hover:from-purple-600 group-hover:to-blue-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">GitHub</div>
                  <div className="text-sm text-gray-400">View my projects & code</div>
                </div>
              </a>
              
              <a
                href="mailto:arman.techiee@gmail.com"
                className="flex items-center p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-indigo-500 rounded-lg flex items-center justify-center mr-3 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">Email</div>
                  <div className="text-sm text-gray-400">arman.techiee@gmail.com</div>
                </div>
              </a>
            </div>

            {/* Social Media Icons */}
            <div>
              <p className="text-sm text-gray-400 mb-3 font-medium">Follow my journey</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/techiee.arman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 bg-gray-800/50 hover:bg-blue-600 rounded-xl border border-gray-700/50 hover:border-blue-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/techiee.arman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-xl border border-gray-700/50 hover:border-pink-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-6 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-sm mb-1">
              &copy; {new Date().getFullYear()} Arman Khan. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with passion for technology and innovation
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex space-x-6 text-sm">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline decoration-blue-400 underline-offset-4"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline decoration-blue-400 underline-offset-4"
              >
                Terms of Service
              </a>
              <a 
                href="#accessibility" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline decoration-blue-400 underline-offset-4"
              >
                Accessibility
              </a>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
    </div>
  </footer>
);

export default Footer;