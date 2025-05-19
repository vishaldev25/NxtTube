import { failure_view_dark_theme, failure_view_light_theme } from "../assets"
import { useTheme } from "../context/ThemeContext"


const FailureView = ({ onRetry }) => {
  const { darkMode } = useTheme()
  const imageValue = darkMode ? failure_view_dark_theme : failure_view_light_theme
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src={imageValue}
        className="w-[275px] h-[275px] m-3"
      />
      <h2 className="m-2 text-lg font-bold">
        Oops! Something Went Wrong
      </h2>
      <p className="m-1 text-center dark:text-[#f1f1f1]">
        We are having some trouble to compelete your requeust.
      </p>
      <p className="m-1 text-center dark:text-[#f1f1f1] text-[#1e293b]">Please Try again.</p>
      <button
        onClick={onRetry}
        className="px-4 py-1 m-2 rounded bg-[#4f46e5] p-2 font-normal text-[#f8fafc]"
      >
        Retry
      </button>
    </div>
  )
}

export default FailureView
