import { Navbar, Sidebar ,GamingCard, FailureView} from "../components"
import { BeatLoader} from 'react-spinners';

import Cookies from "js-cookie"
import { useEffect, useState } from "react"

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: 'SUCCESS',
  failure: "FAILURE"
}

const Gaming = () => {

  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [gamingVideosList, setGamingVideosList] = useState([]);

  const getGamingVideos = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get("jwt_token");
    const url = import.meta.env.VITE_API_GAMING_URL;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`
      },
    }
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      const updatedVideos = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count
      }));
      setGamingVideosList(updatedVideos)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure);
    }
  }

  useEffect(() => {
    getGamingVideos()
  }, [])

  
  return (
    <>
      <Navbar />
      <div className="flex w-full pt-16 h-min-screen">
        <Sidebar />
        <div className="dark:bg-[#0f0f0f] ml-0 md:ml-[250px] flex-1 min-h-screen p-4 dark:text-white bg-[#f9f9f9]">
          {apiStatus === apiStatusConstants.inProgress && (
            <div className="flex items-center justify-center w-full min-h-screen">
              <BeatLoader color="#00BFFF" height={30} width={30} />
            </div>
          )}
          {
            apiStatus === apiStatusConstants.success && (
              <ul className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {gamingVideosList.map(video => {
                  return <GamingCard key={video.id} videoDetails={video} />
                })}
              </ul>
            )
          }
          {
            apiStatus === apiStatusConstants.failure && (
                <FailureView onRetry ={getGamingVideos} />
            )
          }
        </div>
      </div>
    </>
  )
}

export default Gaming
