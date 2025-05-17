import { nxtwatch_logo_dark, nxtwatch_logo_light } from "../assets"
import { useTheme } from "../context/ThemeContext"

const Login = () => {
  const { darkMode } = useTheme();

  const logoSrc = darkMode ? nxtwatch_logo_dark : nxtwatch_logo_light;
  
  const renderUsername = () => {
    return (
      <>
        <label className="mb-2 text-xs font-bold text-gray-600 dark:text-gray-300">USERNAME</label>
        <input 
          placeholder="Username"
          type="text"
          className="p-3 border dark:text-[#f9f9f9] border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#383838] dark:border-gray-600"
        />
      </>
    )
  }

  const renderPassword = () => {
    return (
      <>
        <label className="mb-2 text-xs font-bold text-gray-600 dark:text-gray-300">PASSWORD</label>
        <input 
          placeholder="Password"
          type="password"
          className="p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#383838] dark:border-gray-600"
        />
      </>
    )
  }

  const renderShowPassword = () => {
    return (
      <div className="flex justify-center">
        <input 
          type="checkbox"
          className="h-5 mr-2 border border-gray-300 rounded outline-none  dark:bg-[#383838] dark:border-gray-600"
        />
        <label htmlFor="show" className="text-sm font-bold text-gray-600 dark:text-gray-300">Show Password</label>
      </div>
    )
  }

  return (
    <div className="dark:bg-[#231f20] bg-white  dark:text-white min-h-screen flex justify-center items-center">
      <div className="flex items-center justify-center max-w-lg p-6 mx-4 border-2 border-gray-300 rounded-lg shadow-lg dark:border-gray-600">
        <form className="flex flex-col gap-4">
          <img src={logoSrc} alt="logo" className="mx-auto mb-6 sm:w-[150px] md:w-[275px]" />
          <div className="flex flex-col">{renderUsername()}</div>
          <div className="flex flex-col">{renderPassword()}</div>
          <div className="flex flex-row items-center gap-4">{renderShowPassword()}</div>
          <button type="submit" className="p-2 font-bold rounded-lg w-[100%] bg-[#3b82f6] text-white font-mono">
            Login
          </button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
