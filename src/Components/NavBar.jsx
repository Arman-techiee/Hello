import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";
 
function NavBar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}

        <Link

          to="/"
          className="text-2xl font-bold text-blue-700 dark:text-blue-400"
        >
          MyApp
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>Arman</li>
          <li>|</li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutme"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/user"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              User
            </Link>
          </li>
        </ul>
        

        Theme Toggle
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Toggle Dark Mode"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-gray-800" /> 
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>
      </div>
    </nav>
  );
}
export default NavBar;