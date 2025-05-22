import { useEffect, useState } from "react"
import { Navbar, Sidebar , TrendingCard } from "../components"
import { FailureView } from "../components"
import { BeatLoader} from 'react-spinners';

import Cookies from "js-cookie"
import { formatDistanceToNow } from "date-fns"


const apiConstantStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE"
}

const Trending = () => {
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.initial)
  const [trendingVideosList, setTrendingVideosList] = useState([])

  const getTrendingVideos = async () => {
    setApiStatus(apiConstantStatus.inProgress);
    const jwtToken = Cookies.get("jwt_token");
    const url = import.meta.env.VITE_API_TRENDING_URL;

    const options = {
      method: "GET",
      headers: {
        Authorization : `Bearer ${jwtToken}`
      }
    }

    const response = await fetch(url, options);
    const data = await response.json()
    
    if (response.ok === true) {
      const updatedVideos = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        publishedAt: formatDistanceToNow(new Date(each.published_at), { addSuffix: true }),
        name: each.channel.name,
        imageUrl: each.channel.profile_image_url
      }))

      setTrendingVideosList(updatedVideos)
      setApiStatus(apiConstantStatus.success)
    } else {
      setApiStatus(apiConstantStatus.failure)
    }
  }

  useEffect(() => {
    getTrendingVideos()
  }, [])

  return (
    <>
      <Navbar />
      <div className="flex w-full pt-16 h-min-screen">
        <Sidebar />
        <div className="dark:bg-[#0f0f0f] ml-0 md:ml-[250px] flex-1 min-h-screen p-4 dark:text-white bg-[#f9f9f9]">
          {apiStatus === apiConstantStatus.inProgress && (
            <div className="flex items-center justify-center w-full min-h-screen">
              <BeatLoader color="#00BFFF" height={30} width={30} />
            </div>
          )}
          {
            apiStatus === apiConstantStatus.success && (
              <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
                {trendingVideosList.map(video => {
                  return <TrendingCard key={video.id} videoDetails={video} />
                })}
              </ul>
            )
          }
          {
            apiStatus === apiConstantStatus.failure && (
              <FailureView onRetry ={getTrendingVideos} />
            )
          }
        </div>
      </div>
      
      
    </>
  )
}

export default Trending
