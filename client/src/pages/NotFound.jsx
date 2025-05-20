import { Navbar, Sidebar } from "../components"
import { useTheme } from "../context/ThemeContext"
import { not_found_dark, not_found_light } from "../assets";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { darkMode } = useTheme();
  const imageValue = darkMode ? not_found_dark : not_found_light
  return (
    <>
      <Navbar />
      <div className="flex w-full pt-16 h-min-screen">
        <Sidebar />
        <div className="dark:bg-[#0f0f0f] ml-0 md:ml-[250px] flex-1  p-4 dark:text-white bg-[#f9f9f9] flex flex-col items-center justify-center min-h-screen">
          <img
            src={imageValue}
            className="md:w-[400px] md:h-[400px] m-3"
          />
          <h1 className="p-5 text-xl font-bold md:text-4xl">Page not Found</h1>
          <p className="font-normal text-md">We are sorry the requesting page is not found!</p>
          <Link to="/">
            <button
              className="px-4 py-1 mt-4 rounded bg-[#4f46e5] p-2 font-normal text-[#f8fafc]"
            >
              Go to home page
            </button>
          </Link>
        </div>
    </div>
    </>
  )
}

export default NotFound
