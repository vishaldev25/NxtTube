import { no_search_results } from "../assets";

const NoSearchResult = ({onRetry}) => {
  return (
    <div className="flex flex-col items-center justify-center">
          <img
              src={no_search_results} 
              alt="no Search results"
              className="w-[250px] md:w-[500px] mt-5"
          />
          <h2 className="mt-4 text-2xl font-bold">No Search Results Found!</h2>
          <p className="mt-4 mb-4 dark:text-white">Try different keywords or remove search filter</p>
          <button
              onClick={onRetry}
              className="px-4 py-2 font-semibold text-white rounded bg-violet-500">
              Retry
          </button>
    </div>
  )
}

export default NoSearchResult
