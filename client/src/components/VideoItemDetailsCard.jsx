import { useState, useEffect } from "react"
import ReactPlayer from "react-player"
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import { FaSave } from 'react-icons/fa'
import { useSavedVideos } from "../context/SavedVideosContext"

const VideoItemDetailsCard = ({ videoDetails }) => {
    const {
        name, videoUrl, description, subscribers, title, viewCount, publishedAt, imageUrl
     } = videoDetails
    
    const formatedDate = publishedAt.replace(/^(over|about|almost)\s/, '')

    const { toggleSaveVideo, savedVideos } = useSavedVideos();
    const [isLiked, setIsLiked] = useState(false);
    const [isUnliked, setIsUnliked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    
    useEffect(() => {
        const isAlreadySaved = savedVideos.some((vid) => vid.videoUrl === videoUrl);
        setIsSaved(isAlreadySaved)
     },[savedVideos, videoUrl])


    const like = isLiked ? "Liked" : "Like";
    const unlike = isUnliked ? "Disliked" : "Dislike";
    const saved = isSaved ? "Saved" : "Save"
    
    const handleLike = () => {
        setIsLiked((prev) => !prev);
        if(!isLiked && isUnliked) setIsUnliked(false)
    }
    
    const handleDislike = () => {
        setIsUnliked((prev) => !prev)
        if (!isUnliked && isLiked) setIsLiked(false)
    }

    const handleSave = () => {
        setIsSaved((prev) => !prev)
        toggleSaveVideo(videoDetails)
    }
  return (
      <div className="min-h-screen p-1 md:p-5">
          <div className="w-full gap-3 mb-4">
              <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
              />
          </div>
          <h2 className="text-xl font-bold md:text-2xl">{title}</h2>

          <div className="flex gap-4 mt-3 mb-2">
              <p><span className="mr-1 font-bold text-red-500 text-md">{viewCount}</span> Views</p>
              <p className="font-medium">{formatedDate }</p>
          </div>

          <div className="flex items-center gap-4 mb-5">
              <div className="flex">
                  <button
                      onClick={handleLike}
                  >
                      <span className={`flex text-md font-normal items-center ${isLiked ? 'text-blue-600 font-semibold text-lg': ''} transition`}>
                          <AiOutlineLike size={25} className="mr-1" />
                          {like}
                      </span>
                        
                  </button>
              </div>
            
              <div className="flex">
                  <button onClick={handleDislike}>
                      <span className={`flex text-md font-normal items-center ${isUnliked ? 'text-red-400 font-semibold text-lg': ''} transition`}>
                          <AiOutlineDislike size={25} className="mr-1" />
                          {unlike}
                      </span>
                      
                  </button>
              </div>

              <div className="flex">
                  <button onClick={handleSave} >
                      <span className={`flex text-md font-normal items-center ${isSaved ? 'text-green-600 font-semibold text-lg': ''} transition`}>
                          <FaSave size={25} className="mr-1" />
                          {saved}
                      </span>
                  </button>
              </div>
          </div>
          
          <hr className="h-1 bg-yellow-300 border-0" />

          <div className="flex gap-4 mt-5 mb-4">
              <img 
                  src={imageUrl}
                  alt="thumbanail"
                  className="w-12 h-12"
              />
              <div>
                  <p className="text-xl">{name}</p>
                  <p className="font-normal text-md">{subscribers} subscribers</p>
              </div>
          </div>
          <div>
              <p>{ description}</p>
          </div>
    </div>
  )
}

export default VideoItemDetailsCard
