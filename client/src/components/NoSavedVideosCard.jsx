import { no_saved_videos } from "../assets"

const NoSavedVideosCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <img
              src={no_saved_videos} 
              className="w-[300px] h-[300px] md:h-[400px] md:w-[400px] mb-3"
          />
          <h1 className="text-xl font-bold">No Saved Videos Found</h1>
          <p  className="mt-3 text-md font-semibolds">You can save your videos while watching them</p>
    </div>
  )
}

export default NoSavedVideosCard
