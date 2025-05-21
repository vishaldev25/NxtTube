import ReactPlayer from "react-player"

const VideoItemDetailsCard = ({ videoDetails }) => {
    const {
        name, videoUrl, description, subscribers, title, viewCount, publishedAt, imageUrl
     } = videoDetails
    
    const formatedDate = publishedAt.replace(/^(over|about|almost)\s/, '')
  return (
    <div className="p-4">
          <ReactPlayer url={videoUrl} controls />
          <h2>{title}</h2>

          <div className="flex gap-4">
              <p><span>{viewCount}</span> Views</p>
              <p>{formatedDate }</p>
          </div>

          <div className="flex gap-4">
              <p>Like</p>
              <p>Dislike</p>
              <p>Save</p>
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
