import { Link } from "react-router-dom"

const TrendingCard = ({ videoDetails }) => { 
    const {
        id, title, thumbnailUrl, viewCount, publishedAt,
        name, imageUrl
    } = videoDetails

    const onlyDate = publishedAt.replace(/^(over|about|almost)\s/, '')
  return (
    <li className="w-full p-0 overflow-hidden transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-xl dark:bg-gray-800  rounded shadow-md">
        <Link to={`/videos/${id}`}>
            <img
                src={thumbnailUrl}
                alt="thumbnail"     
                className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-48"
            />
          </Link>
          <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold truncate">{title}</h2>
              <div className="flex items-center space-x-3">
                  <img
                      src={imageUrl}
                      alt="channel"
                      className="w-8 h-8 rounded-full"
                  />
                  <span className="font-normal text-md">{name}</span>
              </div>
              <div className="flex justify-between text-md">
                  <span><span className="font-bold text-red-500">{viewCount}</span> views</span>
                  <span>{onlyDate}</span>
              </div>
          </div>
    </li>
  )
}

export default TrendingCard
