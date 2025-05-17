import { Link } from "react-router-dom"
import { nxtwatch_logo_dark, nxtwatch_logo_light, profile } from "../assets"
import { FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"
const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  const darkIcon = darkMode ? <FaSun size="20" color="#ffffff" /> : <FaMoon size="20" />
  const logoSrc = darkMode ? nxtwatch_logo_dark : nxtwatch_logo_light
  return (
      <nav className="flex items-center justify-between p-4">
          {/* Implementing For Desktop */}
          <Link to="/">
              <img
                  src={logoSrc}
                  alt="logo" 
                  className="w-[110px] items-center"
                  />
        </Link>
          <ul className="flex items-center justify-self-auto">
        <li className="items-center mr-4">
          <button onClick={toggleTheme} className="mt-2">
            {darkIcon}
          </button>
        </li>
        <li className="mr-4">
          <img alt="profile" src={profile} className="w-[25px]" />
            </li>
        <li className="mr-4">
          <button className="px-4 py-1 text-sm font-serif font-semibold rounded shadow-md dark:bg-transparent text-[#4f46e5] border-2 border-[#4f46e5] dark:text-white dark:border-white">
            Logout
          </button>
            </li>
          </ul>
    </nav>
  )
}

export default Navbar
