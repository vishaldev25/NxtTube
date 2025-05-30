import { Link } from "react-router-dom"

const GamingCard = ({videoDetails}) => {
  const {id, thumbnailUrl, title, viewCount} = videoDetails
  return (
    <li className="flex flex-col items-center w-full max-w-sm gap-2 p-2 m-2 transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-xl rounded shadow">
      <Link to={`/videos/${id}`}>
        <img 
          src={thumbnailUrl}
          alt="thumbnail"
          className="object-cover w-full h-auto rounded"
        />
        <div className="p-1 mt-2">
          <p className="font-semibold text-base mb-1 text-[20px] md:text-lg text-[#313131] dark:text-[#d7dfe9]">{title}</p>
          <p className="text-[#313131] dark:text-[#d7dfe9] text-md items-center"><span className="font-bold text-red-600">{ viewCount}</span> watching worldwide</p>
        </div>
      </Link>
    </li>
  )
}

export default GamingCard
