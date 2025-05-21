import {AiOutlineSearch} from 'react-icons/ai'

const SearchHome = ({ searchItem, setSearchItem }) => {
  const handleInputChange = (event) => {
    setSearchItem(event.target.value)
  }
  
  return (
    <div className="flex items-center min-w-full px-4 border-2 border-red-500 rounded-lg">
      <input 
        type="search"
        value={searchItem}
        placeholder="Search Vidoes.."
        onChange={handleInputChange}
        className="w-full text-lg font-bold bg-transparent rounded outline-none"
      />
      <button className='p-2 text-center'>
        <AiOutlineSearch size={26} />
      </button>
    </div>
  )
}

export default SearchHome
