import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/aboutme", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/login", label: "Login" },
  { to: "/user", label: "User" },
];

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 dark:text-blue-400"
        >
          My Portfolio
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-colors hover:text-blue-500 dark:hover:text-blue-300 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          aria-label="Toggle theme"
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