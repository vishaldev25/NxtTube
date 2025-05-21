
const SearchHome = ({ searchItem, setSearchItem }) => {
    const handleInputChange = (event) => {
        setSearchItem(event.target.value)
    }
    
  return (
    <div>
          <input 
              type="text"
              value={searchItem}
              placeholder="Search Vidoes.."
              onChange={handleInputChange}
      />
    </div>
  )
}

export default SearchHome
