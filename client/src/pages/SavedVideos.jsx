import { Navbar, Sidebar, HomeCard , NoSavedVideosCard} from "../components"
import { useSavedVideos } from "../context/SavedVideosContext"


const SavedVideos = () => {
  const { savedVideos } = useSavedVideos();
  
  return (
    <>
      <Navbar />
      <div className="flex w-full pt-16 h-min-screen">
        <Sidebar />
        <div className="dark:bg-[#0f0f0f] ml-0 md:ml-[250px] flex-1 min-h-screen p-4 dark:text-white bg-[#f9f9f9]">
          {savedVideos.length === 0 ? (
         <NoSavedVideosCard />
      ) : (
        <div className="">
          {savedVideos.map((video) => (
            <HomeCard key={video.videoUrl} videoDetails={video} />
          ))}
        </div>
      )}
        </div>
      </div>
    </>
  )
}

export default SavedVideos
