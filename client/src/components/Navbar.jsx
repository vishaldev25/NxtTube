import { Link, useLocation } from "react-router-dom"
import { nxtwatch_logo_dark, nxtwatch_logo_light, profile } from "../assets"
import { FaMoon, FaSun, FaHome , FaFire, FaGamepad, FaSave} from "react-icons/fa"
import { FiLogOut } from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useTheme } from "../context/ThemeContext"
import Popup from "reactjs-popup"
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { label: "Home", icon: FaHome, path: "/" },
    { label: "Trending", icon: FaFire, path: "/trending" },
    { label: "Gaming", icon: FaGamepad, path: "/gaming" },
    { label: "Saved Videos", icon: FaSave, path: "/saved-videos" },
  ]

  const darkIcon = darkMode ? <FaSun size="20" color="#ffffff" /> : <FaMoon size="20" />
  const logoSrc = darkMode ? nxtwatch_logo_dark : nxtwatch_logo_light
  const hambergerMenu = darkMode ? <GiHamburgerMenu className="pt-2" size="30" color="#ffffff" /> : <GiHamburgerMenu className="pt-2" size="30" />
  const closeMark = darkMode ? <IoMdClose size="25" color="#ffffff"  />: <IoMdClose size="25"  />
  return (
      <nav className="flex items-center justify-between p-4">
          <Link to="/">
              <img
                  src={logoSrc}
                  alt="logo" 
                  className="w-[110px] md:w-[160px] items-center"
                  />
        </Link>
          <ul className="flex items-center justify-self-auto">
        <li className="items-center mr-4">
          <button onClick={toggleTheme} className="mt-2">
            {darkIcon}
          </button>
        </li>
        <li className="mr-4">
          <img alt="profile" src={profile} className="w-[25px] hidden md:inline-block" />
          <div className="block md:hidden">
            <Popup
            modal
            trigger={
              <button>
                {hambergerMenu}
                </button>
            }
            
          >
              {close => (
                <div className="block w-[100vw] min-h-screen md:hidden bg-[#f1f5f9] dark:bg-[#231f20] dark:text-white">
                  <div>
                    <button
                      type="button"
                      onClick={() => close()}
                      className="absolute p-5 top-4 right-4"
                    >
                      {closeMark}
                    </button>
                  </div>
                  <div className="flex items-center justify-center min-h-screen">
                    <ul className="flex flex-col w-56 space-y-4">
                      {navItems.map(({ label,icon:Icon,  path}) => {
                        const isActive = currentPath === path;
                        return (
                          <li key={path}>
                            <Link to={path}>
                              <div
                                className={`flex items-center space-x-3 px-6 py-3 rounded-md transition-colors ${
                                isActive ? 'bg-red-100 text-red-600 font-semibold' : 'dark:text-[#f1f5f9] font-semibold '}
                                `}
                              >
                                <Icon size="25" className={`text-xl mr-4 ${isActive ? 'text-red-500' : ''}`} />
                                <p className="text-base">{ label }</p>
                              </div>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
            )}
          </Popup>
          </div>
          
            </li>
        <li className="mr-4">
          {/*POPUP for small devices */}
          <div className="block md:hidden">
            <Popup
              modal
              trigger={
                <button className="block md:hidden ">
                  <FiLogOut size="20" className="font-extrabold" />
                </button>
              }
            >
              {(close) => (
                <div className="p-5 block md:hidden rounded shadow-md bg-[#f1f5f9] dark:bg-[#231f20] dark:text-white">
                  <h2 className="pb-4 text-[#00306e] font-semibold font-serif text-md dark:text-white">Are you sure you want to Logout?</h2>
                  <div className="flex items-center justify-evenly">
                    <button className="px-4 py-2 rounded border dark:text-[#cbd5e1] shadow-md border-[#383838] dark:border-[#cbd5e1] text-[#424242] font-normal">Cancel</button>
                    <button className="bg-[#3b82f6] font-normal text-white px-4 py-2 rounded shadow-md">Confirm</button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          
          {/* Popup for desktop*/}
          <div>

          </div>
          <button className="hidden md:inline-block px-4 py-1 text-sm font-serif font-semibold rounded shadow-md dark:bg-transparent text-[#4f46e5] border-2 border-[#4f46e5] dark:text-white dark:border-white">
            Logout
          </button>
            </li>
          </ul>
    </nav>
  )
}

export default Navbar
