import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchCharacters } from '../utils/apis';
import { NavLink } from 'react-router-dom';

function Search() {
    const [searchQuery, setSearchQuery] = React.useState<any>('');
    const router = useNavigate()
    const [characters, setCharacters] = React.useState<any[]>([]);
    const [showSearchData, setShowSearchData] = React.useState<boolean>(false);
    const searchRef = React.useRef<any>(null);
    const handleSearchChange = (event: any) => {
      setSearchQuery(event.target.value);
    };
    const filteredCharacters = characters.filter((character: any) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
  
    React.useEffect(() => {
        window.addEventListener("click", (e) => {
          const target = e.target as HTMLElement;
          if (!searchRef?.current?.contains(target)) {
            setShowSearchData(false)
            // setSearchQuery("")
          }
        })
      
    }, [searchRef.current])
    React.useEffect( () => {
      let fetchData = async () => {
  
        setCharacters(await fetchCharacters())
      } 
      fetchData()
    }, [fetchCharacters])
    const handleSearchSubmit = async (e: any) => {
      e.preventDefault();
      setShowSearchData(false)
      // setSearchQuery('')
      router(`/search/${searchQuery}`)
    }
  return (
    <div ref={searchRef} className="w-full relative ">

    <form onSubmit={handleSearchSubmit}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input autoComplete={"off"} type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Search..." required value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => setShowSearchData(true)}
        />
        <button type="submit" className="absolute text-white  top-[50%] translate-y-[-50%] right-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
    </form>
    <div className={`absolute ${showSearchData ? " h-60 py-6 " : "h-0"}  transition-all overflow-y-auto w-full bg-white px-2 space-y-2 shadow-lg rounded-md`}>
      {
        filteredCharacters.map((char: any,ind:number) => (
          <NavLink key={ind} onClick={() => {
            
            
            setShowSearchData(false)
         
          }}
           to={`/comic/${char.id}`}
            className="char flex space-x-2 cursor-pointer">
            <img
              className=''
              style={{
                height:50,
                width: 50,
                objectFit: "contain",
                objectPosition: "center"
              }} src={char?.thumbnail?.path + "." + char?.thumbnail?.extension} alt={char?.name} title={char?.name} />
            <span>

            {char.name}
            </span>
          </NavLink>
        ))
      }
    </div>
  </div>
  )
}

export default Search