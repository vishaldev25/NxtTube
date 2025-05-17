import { Link, useLocation } from "react-router-dom"
import { FaHome , FaFire, FaGamepad, FaSave} from "react-icons/fa"
import { twitter_logo, facebook_logo, linkedin_logo } from "../assets";


const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
    { label: "Home", icon: FaHome, path: "/" },
    { label: "Trending", icon: FaFire, path: "/trending" },
    { label: "Gaming", icon: FaGamepad, path: "/gaming" },
    { label: "Saved Videos", icon: FaSave, path: "/saved-videos" },
    ]
    
    const images = [
        { src: facebook_logo, alt: "Facebook Logo" },
        {src: twitter_logo, alt:"Twitter Logo"},
        {src: linkedin_logo, alt:"Linkedin Logo"}
    ]
    

  return (
    <div className='dark:bg-[#231f20]  dark:text-white hidden w-full min-h-screen p-5 shadow-lg md:flex md:w-1/4 lg:w-1/5  flex-col justify-between'>
        <ul>
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
          <div>
              <h2 className="py-3 text-lg font-bold">CONTACT US</h2>
              <ul className="flex items-center gap-3 justify-evenly">
                  {images.map(({ src, alt}) => {
                      return (
                          <li key={alt} className="p-2">
                              <img src={src} alt={alt} className="w-10" />
                        </li>
                    )
                })}
              </ul>
              <p className="font-semibold text-md">
                  Enjoy! Now to see your channels and recommendations!
              </p>
          </div>
    </div>
  )
}

export default Sidebar
