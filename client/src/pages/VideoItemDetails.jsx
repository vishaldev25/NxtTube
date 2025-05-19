import { Navbar, Sidebar } from "../components"
const VideoItemDetails = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full pt-16 h-min-screen">
        <Sidebar />
        <div className="dark:bg-[#0f0f0f] ml-0 md:ml-[250px] flex-1 min-h-screen p-4 dark:text-white bg-[#f9f9f9]">
          VideoItemDetails
        </div>
    </div>
    </>
  )
}

export default VideoItemDetails
