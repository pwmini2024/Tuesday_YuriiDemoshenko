

function SearchBar({searchHandler}) {
  return (
    <form className="search-bar" onSubmit={searchHandler}>
      <input type="text" />
      <button>Search</button>
    </form>
  )
}

export default SearchBar