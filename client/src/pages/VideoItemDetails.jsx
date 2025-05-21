import { useEffect, useState } from "react"
import { Navbar, Sidebar, FailureView , VideoItemDetailsCard} from "../components"
import { TailSpin } from "react-loader-spinner"
import Cookies from "js-cookie"
import { useParams } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS"
}


const VideoItemDetails = () => {
  const { id } = useParams();
  const [videoItemDetails, setVideoItemDetails] = useState(null)
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  

  const getVideosById = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get("jwt_token")
    
    const url = import.meta.env.VITE_API_VIDEOS_BY_ID_URL.replace(":id", id)
    const options = {
      method: "GET",
      headers : {
        Authorization: `Bearer ${jwtToken}`
      }
    }

    const response = await fetch(url, options);
    const data = await response.json()
    
    console.log(data);
    
    if (response.ok === true) {
      const videoList = data.video_details
      const updatedVideoList = {
        id: videoList.id,
        description: videoList.description,
        title: videoList.title,
        thumbnailUrl: videoList.thumbnail_url,
        viewCount: videoList.view_count,
        videoUrl: videoList.video_url,
        publishedAt: formatDistanceToNow(new Date(videoList.published_at), { addSuffix: true }),
        name: videoList.channel.name,
        imageUrl: videoList.channel.profile_image_url,
        subscribers:videoList.channel.subscriber_count
      }

      setVideoItemDetails(updatedVideoList)
      setApiStatus(apiStatusConstants.success)
    }
    else {
      setApiStatus(apiStatusConstants.failure)
    }
    
  }

  useEffect(() => {
    getVideosById()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])
  

  return (
    <>
      <Navbar />
      <div className="flex w-full pt-16 h-min-screen">
        <Sidebar />
        <div className="dark:bg-[#0f0f0f] ml-0 md:ml-[250px] flex-1 min-h-screen p-4 dark:text-white bg-[#f9f9f9]">
          {apiStatus === apiStatusConstants.inProgress && (
            <div className="flex items-center justify-center w-full min-h-screen">
              <TailSpin color="#00BFFF" height={30} width={30} />
            </div>
          )}
          {
            apiStatus === apiStatusConstants.success && (
              <VideoItemDetailsCard key={videoItemDetails.id} videoDetails={videoItemDetails} />
            )
          }
          {
            apiStatus === apiStatusConstants.failure && (
              <FailureView onRetry ={getVideosById} />
            )
            }

        </div>
    </div>
    </>
  )
}

export default VideoItemDetails
