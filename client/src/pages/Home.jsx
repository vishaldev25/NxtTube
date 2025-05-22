import { useEffect, useState } from "react"
import {
  Navbar, NoSearchResult,
  Sidebar, SearchHome, HomeBanner, HomeCard, FailureView
} from "../components"
import Cookies from "js-cookie"
import { BeatLoader} from 'react-spinners';
import { formatDistanceToNow } from "date-fns"

const apiConstantsStatus = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: 'FAILURE',
  inProgress: "IN_PROGRESS"
}

const Home = () => {
  const [bannerClosed, setBannerClosed] = useState(false)
  const [apiStatus, setApiStatus] = useState(apiConstantsStatus.initial)
  const [searchItem, setSearchItem] = useState('')
  const [homeVideosList, setHomeVideosList] = useState([])

  const getHomeVideos = async () => {
    setApiStatus(apiConstantsStatus.inProgress)
    const jwtToken = Cookies.get("jwt_token");
    const baseUrl = import.meta.env.VITE_API_HOME_URL;
    const url = new URL(baseUrl)
    if (searchItem) {
      url.searchParams.set("search", searchItem)
    }
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedVideos = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        publishedAt: formatDistanceToNow(new Date(each.published_at), { addSuffix: true }),
        name: each.channel.name,
        imageUrl: each.channel.profile_image_url,
      }))
      
      setHomeVideosList(updatedVideos);
      setApiStatus(apiConstantsStatus.success);
    } else {
      setApiStatus(apiConstantsStatus.failure)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getHomeVideos()
    }, 100)
    return () => clearTimeout(timeoutId);
  }, [searchItem])

  const handleRetry = () => {
    setSearchItem("")
  }
  
  return (
    <>
      <Navbar />
      <div className="flex w-full pt-16 h-min-screen">
        <Sidebar />
        <div className="dark:bg-[#0f0f0f] ml-0 md:ml-[250px] flex-1 min-h-screen p-4 dark:text-white bg-[#f9f9f9]">
          {!bannerClosed && <HomeBanner onClose={()=> setBannerClosed(true)} />}
          <div className="px-4 mt-2 mb-2">
            <SearchHome searchItem={searchItem} setSearchItem={setSearchItem} />
          </div>
          
          {apiStatus === apiConstantsStatus.inProgress && (
            <div className="flex items-center justify-center w-full min-h-screen">
              <BeatLoader color="#00BFFF" height={30} width={30} />
            </div>
          )}
          {
            apiStatus === apiConstantsStatus.success && (
              <>
                {homeVideosList.length === 0 ? (
                    <NoSearchResult onRetry ={handleRetry}/>
                ) : (
                  <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
                    {homeVideosList.map(video => {
                      return <HomeCard key={video.id} videoDetails={video} />
                    })}
                  </ul>  
                )}
            </> 
          )
          }
          {
            apiStatus === apiConstantsStatus.failure && (
              <FailureView onRetry ={getHomeVideos} />
            )
          }
        </div>
        </div>
      
      
    </>
  )
}

export default Home
