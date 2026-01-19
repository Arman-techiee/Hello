# Portfolio Website - Arman Khan

A modern, feature-rich portfolio website built with React, showcasing academic projects, professional skills, and personal achievements. This project demonstrates expertise in full-stack development, API integration, and modern web technologies.

## 🌟 Features

### Core Pages
- **Home**: Dynamic hero section with skill highlights and featured projects
- **About**: Comprehensive academic background and professional competencies
- **Projects**: Interactive showcase of web applications
- **Blog**: Article listing with search, filtering, and pagination
- **Contact**: Professional contact form with social media integration

### Interactive Applications
1. **Weather Intelligence Platform**
   - Real-time weather data from WeatherAPI.com
   - Comprehensive metrics (temperature, humidity, wind, pressure, UV index)
   - Search history and location-based forecasts
   - Air quality monitoring

2. **Movie Rating App**
   - TMDB API integration for movie data
   - Personal rating system
   - Watchlist and favorites management
   - Advanced search and filtering

3. **News Feed Application**
   - NewsAPI.org integration
   - Nepal-focused news aggregation
   - Responsive card layout
   - Real-time updates

4. **Professional Typing Test**
   - Real-time WPM and accuracy tracking
   - Multiple test durations (30s to 5 minutes)
   - Performance analytics and history
   - Professional-grade content

### Additional Features
- **Dark Mode**: System-wide theme switching
- **Authentication**: Clerk integration for user management
- **Protected Routes**: Secure access to project pages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Built with shadcn/ui and Radix UI

## 🚀 Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **React Router DOM 7.1.3** - Client-side routing
- **Tailwind CSS 4.0.0** - Utility-first styling
- **Vite 6.0.5** - Build tool and dev server

### UI Components
- **shadcn/ui** - Accessible component library
- **Radix UI** - Unstyled, accessible primitives
- **Lucide React** - Icon library

### Authentication
- **Clerk React 5.23.2** - User authentication and management

### API Integrations
- **Axios 1.7.9** - HTTP client
- **WeatherAPI.com** - Weather data
- **TMDB API** - Movie information
- **NewsAPI.org** - News articles

### Utilities
- **clsx** & **tailwind-merge** - Class name management
- **class-variance-authority** - Variant utilities

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- API keys for:
  - [WeatherAPI.com](https://www.weatherapi.com/)
  - [TMDB](https://www.themoviedb.org/settings/api)
  - [NewsAPI.org](https://newsapi.org/)
  - [Clerk](https://clerk.com/)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arman-techiee/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Clerk Authentication
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

   # API Keys
   VITE_WEATHER_API_KEY=your_weatherapi_key
   VITE_MOVIE_API_KEY=your_tmdb_api_key
   VITE_NEWS_API_KEY=your_newsapi_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets
├── src/
│   ├── assets/             # Images and media files
│   │   └── photo/
│   ├── Components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── NavBar.jsx
│   │   ├── Weather.jsx
│   │   ├── MovieRatingApp.jsx
│   │   ├── NewsApp.jsx
│   │   ├── TypingTest.jsx
│   │   ├── Project.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── PleaseSignIn.jsx
│   ├── Context/           # React context providers
│   │   └── ThemeContext.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useTheme.js
│   ├── lib/               # Utility functions
│   │   └── utils.js
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── UserList.jsx
│   │   └── UserDetail.jsx
│   ├── routes/            # Routing configuration
│   │   └── AppRouter.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Features in Detail

### Theme System
- Custom theme context with localStorage persistence
- Automatic dark mode detection
- Smooth transitions between themes

### Authentication Flow
- Clerk-powered user authentication
- Protected routes for sensitive pages
- Sign-in modal integration
- User profile management

### API Integration
- Centralized error handling
- Loading states for all API calls
- Rate limiting awareness
- Graceful fallbacks for missing data

### Responsive Design
- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interfaces
- Optimized images

## 🚀 Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build output will be in the `dist` directory.

## 🧪 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow ESLint configuration
- Maintain consistent naming conventions
- Write self-documenting code

### Component Structure
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop validation
- Handle edge cases gracefully

### Performance
- Lazy load routes and components
- Optimize images and assets
- Minimize bundle size
- Use React.memo when appropriate

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk authentication key | Yes |
| `VITE_WEATHER_API_KEY` | WeatherAPI.com API key | Yes |
| `VITE_MOVIE_API_KEY` | TMDB API key | Yes |
| `VITE_NEWS_API_KEY` | NewsAPI.org API key | Yes |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Arman Khan**

- GitHub: [@Arman-techiee](https://github.com/Arman-techiee)
- Email: arman.techiee@gmail.com
- Facebook: [techiee.arman](https://www.facebook.com/techiee.arman)
- Instagram: [@techiee.arman](https://www.instagram.com/techiee.arman)

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/)
- [WeatherAPI.com](https://www.weatherapi.com/)
- [TMDB](https://www.themoviedb.org/)
- [NewsAPI.org](https://newsapi.org/)

## 📊 Project Status

This project is actively maintained and under continuous development. New features and improvements are regularly added.

---

**Note**: This is a portfolio project showcasing web development skills. API keys should be kept secure and never committed to version control.

For questions or support, please open an issue or contact me directly.