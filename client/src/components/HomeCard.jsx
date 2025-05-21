import { Link } from "react-router-dom"

const HomeCard = ({ videoDetails }) => {
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
                className="w-full h-48 object-fit sm:h-56 md:h-64 lg:h-48"
            />
          </Link>
        <div className="flex flex-col items-start p-4 space-x-4 space-y-2">
          <div className="flex items-center justify-center">
            <img
              src={imageUrl}
              alt="channel"
              className="w-12 h-12 mr-3 rounded-full"
            />
            <h2 className="text-lg font-semibold line-clamp-2 min-h-[3.25rem] ">{title}</h2>
          </div>
          <div className="flex items-center gap-2 mt-2 space-x-3">
              <span className="text-sm font-normal">{name}</span>
              <span><span className="text-sm font-bold text-red-500">{viewCount}</span> views</span>
                  <span>{onlyDate}</span>
          </div>
      </div>
    </li>
  )
}

export default HomeCard
