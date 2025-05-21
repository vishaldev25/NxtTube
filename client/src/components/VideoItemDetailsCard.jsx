import { useState } from "react"
import ReactPlayer from "react-player"
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {FaSave} from 'react-icons/fa'

const VideoItemDetailsCard = ({ videoDetails }) => {
    const {
        name, videoUrl, description, subscribers, title, viewCount, publishedAt, imageUrl
     } = videoDetails
    
    const formatedDate = publishedAt.replace(/^(over|about|almost)\s/, '')

    const [isLiked, setIsLiked] = useState(false);
    const [isUnliked, setIsUnliked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    
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
        setIsSaved((prev)=>!prev)
    }
  return (
      <div className="min-h-screen">
          <div className="">
              <ReactPlayer 
                url={videoUrl} controls 
              />
          </div>
          
          <h2>{title}</h2>

          <div className="flex gap-4">
              <p><span>{viewCount}</span> Views</p>
              <p>{formatedDate }</p>
          </div>

          <div className="flex gap-4">
              <div>
                  <button
                      onClick={handleLike}
                  >
                      <span className="flex">
                          <AiOutlineLike />
                          {like}
                      </span>
                        
                  </button>
              </div>
            
              <div>
                  <button onClick={handleDislike}>
                      <span className="flex">
                          <AiOutlineDislike />
                          {unlike}
                      </span>
                      
                  </button>
              </div>

              <div>
                  <button onClick={handleSave} >
                      <span className="flex">
                          <FaSave />
                          {saved}
                      </span>
                  </button>
              </div>
          </div>
          <hr className="text-red-500 border-t" />

          <div className="flex gap-4">
              <img 
                  src={imageUrl}
                  alt="thumbanail"
                  className="w-10 h-10"
              />
              <div>
                  <p>{name}</p>
                  <p>{subscribers} subscribers</p>
              </div>
          </div>
          <div>
              <p>{ description}</p>
          </div>
    </div>
  )
}

export default VideoItemDetailsCard
