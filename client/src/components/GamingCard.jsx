import { Link } from "react-router-dom"

const GamingCard = ({videoDetails}) => {
  const {id, thumbnailUrl, title, viewCount} = videoDetails
  return (
    <li>
      <Link to={`/videos/${id}`}>
        <img 
          src={thumbnailUrl}
          alt="thumbnail"
          width={350}
          height={350}
        />
        <div>
          <p>{title}</p>
          <p>{ viewCount} watching worldwide</p>
        </div>
      </Link>
    </li>
  )
}

export default GamingCard
