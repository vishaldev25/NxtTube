import { useState } from "react";
import { nxtwatch_logo_dark, nxtwatch_logo_light } from "../assets"
import { useTheme } from "../context/ThemeContext"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { darkMode } = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const navigate = useNavigate();

  
  const logoSrc = darkMode ? nxtwatch_logo_dark : nxtwatch_logo_light;
  
  const renderUsername = () => {
    return (
      <>
        <label htmlFor="username" className="mb-2 text-xs font-bold text-gray-600 dark:text-gray-300">USERNAME</label>
        <input 
          id = "username"
          placeholder="Username"
          type="text"
          className="p-3 border dark:text-[#f9f9f9] border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#383838] dark:border-gray-600"
          value={username}
          onChange={(event)=> setUsername(event.target.value)}
        />
      </>
    )
  }

  const renderPassword = () => {
    return (
      <>
        <label htmlFor="password" className="mb-2 text-xs font-bold text-gray-600 dark:text-gray-300">PASSWORD</label>
        <input
          id="password"
          placeholder="Password"
          type={showPassword ? "text": "password"}
          className="p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#383838] dark:border-gray-600"
          value={password}
          onChange={(event)=> setPassword(event.target.value)}
        />
      </>
    )
  }

  const renderShowPassword = () => {
    return (
      <div className="flex justify-center">
        <input 
          id="show"
          type="checkbox"
          checked={showPassword}
          onChange={(event)=> setShowPassword(event.target.checked)}
          className="h-5 mr-2 border border-gray-300 rounded outline-none  dark:bg-[#383838] dark:border-gray-600"
        />
        <label htmlFor="show" className="text-sm font-bold text-gray-600 dark:text-gray-300">Show Password</label>
      </div>
    )
  }

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, { expires: import.meta.env.VITE_JWT_EXPIRES })
    navigate("/")
    setErrorMsg("")
    setShowErrorMsg(false)
  }

  const onSubmitFailure = (error_msg) => {
    setErrorMsg(error_msg);
    setShowErrorMsg(true);
  }

  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const url = import.meta.env.VITE_API_URL;
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options); 
    const data = await response.json();

    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token);
    }
    else {
      onSubmitFailure(data.error_msg);
    }
  }

  return (
    <div className="dark:bg-[#231f20] bg-white  dark:text-white min-h-screen flex justify-center items-center">
      <div className="flex items-center justify-center max-w-lg p-6 mx-4 border-2 border-gray-300 rounded-lg shadow-lg dark:border-gray-600">
        <form
          onSubmit={submitForm}
          className="flex flex-col gap-4">
          <img src={logoSrc} alt="logo" className="mx-auto mb-6 sm:w-[150px] md:w-[275px]" />
          <div className="flex flex-col">{renderUsername()}</div>
          <div className="flex flex-col">{renderPassword()}</div>
          <div className="flex flex-row items-center gap-4">{renderShowPassword()}</div>
          <button
            type="submit"
            className="p-2 font-bold rounded-lg w-[100%] bg-[#3b82f6] text-white font-mono">
            Login
          </button>
          {showErrorMsg && (
            <p className="text-red-500">{ errorMsg}</p>
          )}
        </form>
      </div>
      
    </div>
  )
}

export default Login
