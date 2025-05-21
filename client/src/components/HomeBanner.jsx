import { banner_bg, nxtwatch_logo_light } from "../assets"
import {IoMdClose} from 'react-icons/io'

const HomeBanner = ({onClose}) => {
  
  return (
    <div className="px-4 py-2">
      <div
      className="flex justify-between h-48 p-3 mb-3 bg-center bg-no-repeat bg-cover rounded-lg md:p-6 dark:text-black"
      style={{backgroundImage: `url(${banner_bg})`}}
      >
        <div>
          <img 
          src={nxtwatch_logo_light}
          className="w-[160px] md:w-[220px]"
        />
        <p className="my-4 font-sans font-semibold text-md">
          Buy Nxt Watch Premium prepaid plans with UPI
        </p>
        <button className="px-4 py-2 border-2 border-red-500 rounded">
          Get It Now
        </button>
      </div>
        <div>
          <button
            type="button"
            onClick={onClose}
          >
          <IoMdClose size={30} />
        </button>
      </div>
    </div>
  </div>
  )
}

export default HomeBanner
